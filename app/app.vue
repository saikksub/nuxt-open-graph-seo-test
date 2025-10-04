<template>
  <div>
    <NuxtRouteAnnouncer />
    <div>
      hello world
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Sai',
  description: 'Test description',
  ogTitle: 'Sai',
  ogDescription: 'Test description',
  ogImage: '/images/og.png',
  ogImageUrl: '/images/og.png',
  ogImageAlt: 'Test OG Image'
})

useHead({
  title: 'Sai'
})
</script>
