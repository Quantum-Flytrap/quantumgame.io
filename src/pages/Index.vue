<template>
  <Layout>
    <section class="bg-brand-gradient">
      <div class="container hero-section flex flex-col mx-auto px-4 flex-row py-6 lg:py-20">
        <g-image src="~/imgs/qg_small_logo_text.svg" immediate="true" class="mx-auto" />
        <div class="flex-1"></div>
        <div class="flex flex-1 flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">
          <div
            class="flex flex-col md:flex-row md:space-y-0 md:space-x-10 lg:space-x-20 items-stretch"
          >
            <div class="flex-1 prose text-white md:p-4 hero-prose">
              <div>
                <h2 class="uppercase text-white font-normal">
                  Play for fun
                  <br />Learn quantum mechanics as a side effect
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
                  <br />Infinite, generative music by
                  <a href="https://www.paweljanicki.jp/">Pawel Janicki</a>.
                </p>
                <p>
                  More details in our recent preprint,
                  <a
                    href="https://arxiv.org/abs/2203.13300"
                  >"Visualizing quantum mechanics in an interactive simulation - Virtual Lab by Quantum Flytrap", arXiv:2203.13300</a>.
                </p>
              </div>

              <div class="flex flex-col space-y-4 items-start hero-buttons">
                <a
                  href="https://lab.quantumflytrap.com/game"
                  class="bg-intense-violet text-white px-5 py-1"
                >play QUANTUM GAME!</a>
                <a
                  href="https://twitter.com/QuantumFlytrap"
                  class="border border-white text-white px-5 py-1"
                >follow us on TWITTER</a>
                <a
                  href="https://discord.gg/vV8yGMEeSy"
                  class="border border-white text-white px-5 py-1"
                >join our DISCORD</a>
              </div>
            </div>
          </div>
          <div class="flex flex-1">
            <g-image src="~/imgs/pile_xmas.svg" immediate="true" class="hero-image mx-auto" />
          </div>
        </div>
        <p class="md:p-4 support-footnote">
          Supported by
          <a href="https://www.quantumlah.org/">
            CQT | Centre for Quantum Technologies, National
            University of Singapore
          </a>
          and the
          <a href="https://unitary.fund/">Unitary Fund</a>.
        </p>
      </div>
    </section>
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
  min-height: 100vh;
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
