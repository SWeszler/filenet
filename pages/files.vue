<template>
  <div>
      <p>Files:</p>
      <div v-for="(file, index) in files" :key="index">{{ file.name }}</div>
  </div>
</template>
<script>
export default {
  async asyncData({ params, redirect }) {
    const files = await fetch(
      'http://0.0.0.0:3000/api/files'
    ).then((res) => res.json())

    return { files }
  }
}
</script>
