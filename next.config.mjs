/** @type {import('next').NextConfig} */
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin();

import nextPWA from 'next-pwa'

const withPWA = nextPWA({
  dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "t1.kakaocdn.net",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "k.kakaocdn.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s3.a-spot-thur.app",
        pathname: "/**",
      },
    ],
  },
};

export default withPWA(withVanillaExtract(nextConfig));
