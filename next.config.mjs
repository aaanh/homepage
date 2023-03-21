// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  // modularizeImports: {
  //   'kbar': {
  //     transform: 'kbar/{{member}}'
  //   }
  // },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: [
      "photos.app.goo.gl",
      "avatars.githubusercontent.com",
      "raw.githubusercontent.com",
      "i.scdn.co"
    ],
  },
};
export default config;