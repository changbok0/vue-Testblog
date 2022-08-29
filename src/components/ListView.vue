<template>
  <div v-for="(블로그글, i) in 블로그글" :key="i">
    <h4 @click="$router.push('/detailView/0')">{{ 블로그글.title }}</h4>
    <p>{{ 블로그글.date }}</p>
  </div>
</template>

<script>
export default {
  name: "listView",
  props: {
    블로그글: Array,
  },
};
</script>

<style></style>
