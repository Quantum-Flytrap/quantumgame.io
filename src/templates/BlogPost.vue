<template>
  <Layout>
    <br />
    <g-link to="/" class="link"> &larr; Go Back</g-link>
    <div class="post-title prose max-w-full">
      <h1>{{ $page.blogPost.title }}</h1>
      <p class="post-date">
        {{ $page.blogPost.date }} | {{ $page.blogPost.timeToRead }} min read
      </p>
    </div>
    <div
      class="post-content prose max-w-full"
      v-html="$page.blogPost.content"
    ></div>
  </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
   blogPost (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>
