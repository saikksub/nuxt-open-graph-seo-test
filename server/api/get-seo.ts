const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default defineEventHandler(async () => {
  await delay(1000);
  return {
    title: 'Sai (From Server)',
    description: 'Create high-quality web applications with Nuxt, the open source framework that makes full-stack development with Vue.js intuitive.',
    ogTitle: 'Sai (From Server)',
    ogDescription: 'Create high-quality web applications with Nuxt, the open source framework that makes full-stack development with Vue.js intuitive.',
    ogImage: 'https://images.unsplash.com/photo-1759503408354-8cfa8a13115e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ogImageUrl: 'https://images.unsplash.com/photo-1759503408354-8cfa8a13115e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ogImageAlt: 'Test OG Image'
  }
})
