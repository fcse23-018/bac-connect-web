/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'zlyiazddfwcebfyurgjb.supabase.co' },
    ],
  },
};

module.exports = nextConfig;
