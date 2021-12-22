<template>
  <Layout>
    <div class="container max-w-xl mx-auto py-4">
      <div
        class="post-content prose max-w-full"
        v-html="$page.pageA.content"
      ></div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "PageA",
  metaInfo() {
    return { title: this.$page.pageA.title };
  },
};
</script>

<page-query>
query PageA ($path: String!) {
   pageA (path: $path) {
    title,
    content
  }
}
</page-query>

<style>
.link {
  font-size: 0.8rem;
  color: rgba(37, 11, 56, 0.5);
}
</style>
