import { useRouter } from "next/router";
import { useState } from "react";
import Awards from "../components/Awards";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Help from "../components/Help";
import HomeContent from "../components/Home";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import SEO from "../components/SEO";

function MinimizeBtn({ clickEvent }) {
	return (
		<button
			onClick={clickEvent}
			className="flex items-center justify-center hover:text-yellow-500 transition-all ease-in-out rounded-full p-1 hover:bg-slate-700"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
			</svg>
		</button>
	);
}

function MaximizeBtn({ clickEvent, isMaximized }) {
	return (
		<button
			onClick={clickEvent}
			className={
				"flex items-center justify-center hover:text-green-500 transition-all ease-in-out rounded-full p-1 hover:bg-slate-700 " +
				(isMaximized ? "rotate-180" : "")
			}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
			</svg>
		</button>
	);
}

function CloseBtn({ clickEvent }) {
	return (
		<button
			onClick={clickEvent}
			className="flex items-center justify-center hover:text-red-500 transition-all ease-in-out rounded-full p-1 hover:bg-slate-700"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	);
}

const cmdList = [
	"cd ~",
	"cd /etc/contact",
	"cd /var/experience",
	"cd /bin/awards",
	"cd /lib/projects",
	":help",
	"curl -O /uses",
	"history",
];

export default function Home() {
	const [cmdHistory, addCmdHistory] = useState([]);
	const [command, setCommand] = useState();
	const [content, setContent] = useState("home");
	const [isMaximized, setMaximize] = useState(false);
	const [isMinimized, setMinimize] = useState(false);
	const [isValidCmd, setValidCmd] = useState(true);
	const router = useRouter();

	const handleCommandInput = (e) => {
		setCommand(e.target.value);
	};

	const addHistory = (cmd) => {
		addCmdHistory((oldHistory) => [...oldHistory, cmd]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log("Command Fired");
		cmdList.includes(command) ? setValidCmd(true) : setValidCmd(false);
		addHistory(command);
		command == "cd /etc/contact"
			? setContent("contact")
			: command == ":help"
			? setContent("help")
			: command == "cd /bin/awards"
			? setContent("awards")
			: command == "cd /var/experience"
			? setContent("experience")
			: command == "cd /lib/projects"
			? setContent("projects")
			: command == "curl -O /uses"
			? router.push("/uses")
			: command == "history"
			? setContent("history")
			: command == "cd ~"
			? setContent("home")
			: null;
		console.log(cmdHistory);
	};
	const Prompt = ({ className }) => {
		return <p className={className}>{"visitor@aaanh.home > "}</p>;
	};

	return (
		<div
			className={
				"flex max-h-[80vh] sm:h-screen sm:min-h-screen min-w-screen dark:text-white dark:bg-neutral-900 transition-all ease-in-out"
			}
		>
			<SEO title="aaanh's Portfolio"></SEO>
			<button
				onClick={() => setMinimize(!isMinimized)}
				className={
					"hover:bg-green-500 w-20 h-18 invisible flex flex-col justify-center items-center rounded-lg border-green-500 p-2 transition-all ease-in-out border text-2xl absolute left-1/2 bottom-10 " +
					(isMinimized ? "sm:visible" : "invisible")
				}
			>
				<p>💾</p>
				<p>·</p>
			</button>
			<div
				className={
					"dark:bg-neutral-900 flex flex-col m-auto w-screen sm:max-h-screen rounded-[18pt] shadow-2xl transition-all ease-in-out " +
					(isMaximized ? "sm:min-h-screen" : "sm:max-h-[768px] sm:max-w-[1366px]") +
					(isMinimized ? " sm:invisible" : "")
				}
			>
				<div className="flex justify-between items-center max-h-14 w-full bg-green-500 bg-opacity-80 rounded-t-[18pt]">
					<div className="mt-2 ml-2 p-2 px-4 min-w-[100px] flex space-x-10 bg-black bg-opacity-10 rounded-[16pt] rounded-b-none text-white">
						<div>~ @ aaanh.home</div>
						<div> x </div>
					</div>
					<div className="flex justify-end items-center space-x-2 px-2">
						<MinimizeBtn
							isMinimized={isMinimized}
							clickEvent={() => setMinimize(!isMinimized)}
						></MinimizeBtn>
						<MaximizeBtn
							isMaximized={isMaximized}
							clickEvent={() => setMaximize(!isMaximized)}
						></MaximizeBtn>
						<CloseBtn clickEvent={() => router.push("/empty")}></CloseBtn>
					</div>
				</div>
				<div
					className={
						"max-h-[72vh] overflow-y-scroll overflow-x-hidden p-4 font-fira-code text-md " +
						(isMaximized ? "sm:max-h-max" : "sm:max-h-[70vh]")
					}
				>
					<div className="flex flex-wrap space-x-4 items-center">
						<Prompt className="text-purple-500 font-bold"></Prompt>
						<form
							onSubmit={(e) => {
								handleSubmit(e);
							}}
						>
							<input
								list="cmds"
								className="w-auto border-none text-sky-500 font-bold block px-3 py-2 dark:bg-neutral-900 bg-white border border-slate-300 text-sm placeholder-slate-400
								focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-transparent
								disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
								invalid:border-pink-500 invalid:text-pink-600
								focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
								placeholder="try :help & Enter"
								name="terminal"
								onChange={(e) => handleCommandInput(e)}
								autoComplete="off"
								value={command}
							></input>
							<input type="submit" hidden></input>
							<datalist id="cmds">
								<option value=":help"></option>
								<option value="cd /bin/awards"></option>
								<option value="cd /etc/contact"></option>
								<option value="cd /lib/projects"></option>
								<option value="cd /var/experience"></option>
								<option value="cd ~"></option>
								<option value="curl -O /uses"></option>
								<option value="history"></option>
							</datalist>
						</form>
						<div className="transition-all ease-in-out">
							{isValidCmd ? null : "🛑 Invalid Command"}
						</div>
						<div className="text-slate-500 font-bold">
							{"< "}Be cool and use the CLI 😎
						</div>
					</div>
					{content == "history" ? (
						<HistoryContent cmdHistory={cmdHistory}></HistoryContent>
					) : null}
					{content == "awards" ? <Awards></Awards> : null}
					{content == "contact" ? <Contact></Contact> : null}
					{content == "experience" ? <Experience></Experience> : null}
					{content == "help" ? <Help></Help> : null}
					{content == "home" ? <HomeContent></HomeContent> : null}
					{content == "projects" ? <Projects></Projects> : null}
				</div>
				<NavBar setCommand={setCommand} setContent={setContent}></NavBar>
			</div>
		</div>
	);
}

function HistoryContent({ cmdHistory }) {
	return (
		<div>
			<table>
				<tr>
					<th>Index</th>
					<th>Command</th>
				</tr>

				{cmdHistory.map((cmd, index) => (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{cmd}</td>
					</tr>
				))}
			</table>
		</div>
	);
}