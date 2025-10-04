<template>
  <div>
    <NuxtRouteAnnouncer />
    <div>
      hello world
    </div>
  </div>
</template>

<script setup>
const { data: seoData } = useAsyncData('test', () => $fetch('/api/get-seo'))

useSeoMeta({
  title: () => seoData.value?.title ?? 'AA',
  description: () => seoData.value?.description ?? 'AA',
  ogTitle: () => seoData.value?.ogTitle ?? 'AA',
  ogDescription: () => seoData.value?.ogDescription ?? 'AA',
  ogImage: () => seoData.value?.ogImage ?? 'https://images.unsplash.com/photo-1759503408354-8cfa8a13115e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ogImageUrl: () => seoData.value?.ogImageUrl ?? 'https://images.unsplash.com/photo-1759503408354-8cfa8a13115e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ogImageAlt: () => seoData.value?.ogImageAlt ?? 'AA',
})

useHead({
  title: 'Sai'
})
</script>
