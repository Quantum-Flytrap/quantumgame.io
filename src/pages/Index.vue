<template>
  <Layout>
    <section class="bg-brand-gradient">
      <div
        class="container hero-section flex flex-col mx-auto px-4 flex-row py-6 lg:py-20"
      >
        <g-image
          src="~/imgs/qg_small_logo_text.svg"
          immediate="true"
          class="mx-auto"
        />
        <div class="flex-1"></div>
        <div
          class="flex flex-1 flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10"
        >
          <div
            class="flex flex-col md:flex-row md:space-y-0 md:space-x-10 lg:space-x-20 items-stretch"
          >
            <div class="flex-1 prose text-white md:p-4 hero-prose">
              <div>
                <h1 class="uppercase text-white">Play for fun</h1>
                <h2 class="uppercase text-white font-normal">
                  Learn quantum mechanics as a side effect
                </h2>
                <p>
                  A puzzle game with photons, superposition, entanglement and
                  quantum measurement, right in your browser!
                </p>
                <p>
                  Powered by
                  <a href="https://lab.quantumflytrap.com/lab">Virtual Lab</a>
                  by
                  <a href="https://quantumflytrap.com/">Quantum Flytrap</a>.
                </p>
              </div>

              <div class="flex flex-col space-y-4 items-start hero-buttons">
                <a
                  href="https://lab.quantumflytrap.com/game"
                  class="bg-intense-violet text-white px-5 py-1"
                  >play QUANTUM GAME!</a
                >
                <a
                  href="https://lab.quantumflytrap.com/lab/mach-zehnder"
                  class="border border-white text-white px-5 py-1"
                  >visit VIRTUAL LAB</a
                >
                <a
                  href="https://quantumflytrap.com"
                  class="border border-white text-white px-5 py-1"
                  >about QUANTUM FLYTRAP</a
                >
              </div>
            </div>
          </div>
          <div class="flex flex-1">
            <g-image
              src="~/imgs/pile_xmas.svg"
              immediate="true"
              class="hero-image mx-auto"
            />
          </div>
        </div>
        <p class="md:p-4 support-footnote">
          Supported by <a href="https://www.quantumlah.org/">CQT | Centre for Quantum Technologies, National
          University of Singapore</a>
          and the <a href="https://unitary.fund/">Unitary Fund</a>.
        </p>
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
.bg-brand-gradient {
  background: linear-gradient(to bottom, #5d00d3, #5d02d3 14%, #f05);
}

.hero-image {
  width: auto;
  min-width: 200px;
}

.hero-buttons a {
  text-decoration: none;
}

.hero-prose {
  font-weight: 200;
}

.hero-prose h2 {
  font-weight: 200;
}

.hero-prose a {
  font-weight: 200;
  color: white;
}

.hero-section {
  min-height: calc(min(100vh, 800px));
}
.support-footnote {
  color: white;
  font-size: 0.8rem;
  opacity: 0.7;
}

.support-footnote a {
  text-decoration: underline;
}
</style>
