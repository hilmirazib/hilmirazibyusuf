import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const withMDX = createMDX({})

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);
