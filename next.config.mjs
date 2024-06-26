/** @type {import('next').NextConfig} */
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin();
import  bundleAnalyzer from '@next/bundle-analyzer'
import nextPWA from 'next-pwa'

const prod = process.env.NODE_ENV === 'production'

const withPWA = nextPWA({
  dest: 'public',
  register: true,
  disable: prod ? false : true,
  skipWaiting: true
});

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    minimumCacheTTL: 1 * 60 * 60 * 24 * 365, // 1년
    formats: ["image/avif", "image/webp"],
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
      {
        protocol: "https",
        hostname: "s3-compressed.a-spot-thur.app",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.weserv.nl",
        pathname: "/**",
      },
    ],
  },
  headers: async () => {
    return [
      
      {
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],

        source: '/:path(.+\\.(?:ico|png|svg|jpg|jpeg|gif|webp|json|mp3|mp4|ttf|ttc|otf|woff|woff2)$)',
      },
      
    ];
  },

};

export default withBundleAnalyzer(withPWA(withVanillaExtract(nextConfig)));
