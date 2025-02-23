import type { NextConfig } from "next";

// -> https://nextjs.org/docs/app/api-reference/config/next-config-js

const nextConfig: NextConfig = {
  // in real life i would not disable strict mode (default is on),
  // but I think without strict mode logging output is simpler
  reactStrictMode: false,
  // https://nextjs.org/docs/app/api-reference/config/next-config-js/devIndicators
  devIndicators: {
    appIsrStatus: false, // defaults to true
    buildActivity: false, // defaults to true
    // buildActivityPosition?: 'bottom-right'
    // 	| 'bottom-left'
    // 	| 'top-right'
    // 	| 'top-left', // defaults to 'bottom-right'
  },
};

export default nextConfig;
