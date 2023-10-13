/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/ra-hoc-time" : "",
};

module.exports = nextConfig;
