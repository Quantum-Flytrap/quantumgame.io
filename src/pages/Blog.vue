<template>
  <Layout>
    <div class="post-list">
      <div v-for="(edge, index) in $page.allBlogPost.edges" :key="index">
        <h1 class="title" v-html="edge.node.title" />
        <p class="description" v-html="edge.node.description" />
        <g-link :to="edge.node.path" class="read">Read More...</g-link>
        <hr class="line" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allBlogPost {
    edges {
      node {
        id
        title
        description
        path
      }
    }
  }
}
</page-query>
