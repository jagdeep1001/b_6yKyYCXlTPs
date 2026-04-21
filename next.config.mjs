/** @type {import('next').NextConfig} */
const repo = "b_6yKyYCXlTPs"

const nextConfig = {
  output: "export",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
}


export default nextConfig
