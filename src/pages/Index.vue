<template>
  <Layout>
    <section class="bg-brand-violet">
      <div class="container mx-auto px-4 flex-row py-10 lg:py-20">
        <div
          class="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 lg:space-x-20 items-stretch"
        >
          <div class="flex items-center">
            <g-link to="https://lab.quantumflytrap.com/lab/mach-zehnder">
            </g-link>
          </div>
          <div class="flex-1 prose text-white md:p-4 max-w-full self-center">
            <div>
                 <g-image
               src="~/imgs/quantum_flytrap_logo_wave_white.png"
               width="200"
               class="md:max-w-600px mx-auto"
              />
              <h1 class="uppercase text-white">Quantum user interfaces</h1>
              <p>
                Quantum computing gets real!<br />
                At Quantum Flytrap we develop intuitive user interfaces for
                quantum computing to make it an accessible &amp;
                business-available technology. We aim to build the standard for
                interaction with quantum systems.
              </p>
            </div>

            <div
              class="flex flex-row space-x-4 md:flex-col md:space-x-0 md:space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0 max-w-full"
            >
              <a href="https://lab.quantumflytrap.com/">
                <button
                  class="bg-intense-violet text-white flex-auto px-5 py-0.5"
                >
                  VIRTUAL LAB
                </button>
              </a>
              <a href="https://lab.quantumflytrap.com/lab/mach-zehnder">
                <button
                  class="border border-white text-white flex-auto px-5 py-0.5"
                >
                  Go to this experiment
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="landing-sections">
      <section class="bg-pink-beige">
        <div class="container mx-auto">
          <Testimonials
            class="testimonials"
            :testimonials="$page.allTestimonial.edges.map((e) => e.node)"
          />
        </div>
      </section>

      <section
        v-for="(edge, index) in $page.allLandingSection.edges"
        :key="index"
        :class="sectionClass(index)"
      >
        <div class="container mx-auto py-6">
          <div class="section prose max-w-4xl" v-html="edge.node.content" />
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import Testimonials from "~/components/Testimonials.vue";
export default {
  name: "Index",
  components: {
    Testimonials,
  },
  metaInfo: {
    title: "Home",
  },
  methods: {
    sectionClass(index) {
      return index % 2 === 0 ? "bg-dark-violet text-white" : "bg-pink-beige";
    },
  },
};
</script>

<page-query>
query {
  allLandingSection(sortBy: "order", order: ASC) {
    edges {
      node {
        id
        title
        order
        content
      }
    }
  }

  allTestimonial {
    edges {
      node {
        title
        institute
        photo
        link {
          text
          url
        }
        content
      }
    }
  }
}
</page-query>

<style>
.bg-dark-violet.text-white .section.prose {
  color: #e5e7eb;
}
.bg-dark-violet.text-white .section.prose a {
  color: #e5e7eb;
}
.prose .text-white {
  color: white;
}
</style>
