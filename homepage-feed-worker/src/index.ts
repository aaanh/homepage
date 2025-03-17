/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

interface GitHubEvent {
	id: string;
	type: string;
	actor: {
		login: string;
		avatar_url: string;
	};
	repo: {
		name: string;
	};
	created_at: string;
	payload: unknown;
}

export interface Env {
	GITHUB_USERNAME: string;
	KV_NAMESPACE: KVNamespace;
}

const corsHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET, OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
	async scheduled(controller: ScheduledController, env: Env, ctx: ExecutionContext) {
		console.log('cron processed');
	},

	async fetch(request, env, ctx): Promise<Response> {
		// Handle OPTIONS request for CORS preflight
		if (request.method === 'OPTIONS') {
			return new Response(null, {
				headers: corsHeaders,
			});
		}

		const url = new URL(request.url);
		const username = env.GITHUB_USERNAME;
		const kvKey = `github-activity-${username}`;

		// If kv-read=true, return data from KV storage
		if (url.searchParams.get('kv-read') === 'true') {
			const storedData = ((await env.KV_NAMESPACE.get(kvKey, { type: 'json' })) as GitHubEvent[]) || [];
			return new Response(JSON.stringify(storedData, null, 2), {
				headers: {
					'Content-Type': 'application/json',
					...corsHeaders,
				},
			});
		}

		// If github-fetch=true, fetch new data from GitHub API
		if (url.searchParams.get('github-fetch') === 'true') {
			const githubUrl = `https://api.github.com/users/${username}/events`;
			const response = await fetch(githubUrl, {
				headers: {
					'User-Agent': 'Cloudflare-Worker',
					Accept: 'application/vnd.github.v3+json',
				},
			});

			if (!response.ok) {
				return new Response(`GitHub API error: ${response.statusText}`, {
					status: response.status,
					headers: corsHeaders,
				});
			}

			const newData = (await response.json()) as GitHubEvent[];
			const storedData = ((await env.KV_NAMESPACE.get(kvKey, { type: 'json' })) as GitHubEvent[]) || [];

			// Filter out events that are already stored
			const storedEventIds = new Set(storedData.map((event: GitHubEvent) => event.id));
			const uniqueEvents = newData.filter((event: GitHubEvent) => !storedEventIds.has(event.id));

			if (uniqueEvents.length > 0) {
				// Store the merged data in KV
				await env.KV_NAMESPACE.put(kvKey, JSON.stringify([...uniqueEvents, ...storedData]));
			}

			return new Response(JSON.stringify(newData, null, 2), {
				headers: {
					'Content-Type': 'application/json',
					...corsHeaders,
				},
			});
		}

		// If no query parameters match, return 400 Bad Request
		return new Response('Please specify either kv-read=true or github-fetch=true', {
			status: 400,
			headers: {
				'Content-Type': 'text/plain',
				...corsHeaders,
			},
		});
	},
} satisfies ExportedHandler<Env>;
