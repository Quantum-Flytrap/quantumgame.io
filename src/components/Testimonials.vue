<template>
  <div class="flex flex-col lg:flex-row space-20">
    <div
      v-for="t in testimonials"
      :key="t.name"
      class="testimonial flex flex-col text-dark-violet p-10"
    >
      <div flex class="testimonial-text flex flex-col" v-html="t.content"></div>
      <div class="flex flex-row space-x-4">
        <g-image class="testimonial-img" :src="t.photo" />
        <div flex layout="column middle">
          <span class="testimonial-name">{{ t.title }}</span>
          <span class="testimonial-origin">{{ t.institute }}</span>
          <a
            v-if="t.link"
            :href="t.link.url"
            _target="blank"
            class="testimonial-link"
            >{{ t.link.text }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonials",
  props: ["testimonials"],
};
</script>

<style lang="css" scoped>
a {
  color: #eab5ff;
  text-decoration: none;
}
a:hover {
  color: white;
}

.testimonial-img {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-size: cover;
  background-position: 50% 50%;
}

.testimonial-name {
  display: block;
  text-align: left;
}

.testimonial-origin {
  display: block;
  font-weight: bold;
}

a.testimonial-link {
  text-decoration: none;
  font-size: 0.8rem;
  color: inherit;
}
a.testimonial-link:hover {
  text-decoration: underline;
}

.extra-text {
  width: 35%;
  line-height: 1.5;
}

.testimonial-text:before {
  content: "“";
  align-self: flex-start;
}

.testimonial-text:after {
  content: '”';
  align-self: flex-end;
}

.testimonial-text:before, .testimonial-text:after {
  font-size: 5em;
  margin-top: -0.3em;
  margin-bottom: -0.7em;
  display: block;
}
</style>
