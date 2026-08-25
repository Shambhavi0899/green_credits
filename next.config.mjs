/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static export — `next build` emits a self-contained site into ./out
  output: 'export',
  // `next build` and `next dev` must not share a dist directory: building
  // while the dev server is live rewrites its chunks and the running page
  // starts throwing "Cannot find module ./vendor-chunks/...".
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
}

export default nextConfig
