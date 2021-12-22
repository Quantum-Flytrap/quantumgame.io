<template>
  <div>
    <header class="bg-brand-violet text-white">
      <div class="container mx-auto px-4 flex-row">
        <nav class="nav flex flex-col md:flex-row md:space-x-6 uppercase">
          <div class="flex flex-row space-x-6">
            <button id="hamburger-button" class="md:hidden" @click="toggleMenu">
              <svg viewBox="0 0 100 70" width="40" height="40" fill="white">
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
              </svg>
            </button>
            <g-link class="flex landing--link w-full" to="/">
              <g-image
                src="~/imgs/quantum_flytrap_logo_wave_white.png"
                width="200"
                :alt="$static.metadata.siteName"
                class="md:max-w-150px mx-auto"
            />
            </g-link>
          </div>
          <div
            class="flex md:flex flex-col md:flex-row md:space-x-6 uppercase menu-items"
            :class="{ hidden: !menuOpen }"
          >
            <a href="https://lab.quantumflytrap.com">Virtual Lab</a>
            <g-link to="/scientists/">For Scientists</g-link>
            <g-link to="/about/">About</g-link>
            <g-link to="/press/">Press</g-link>
            <g-link to="https://discord.gg/BJMbjUVXmY">Join Discord</g-link>
          </div>
          <div flex />
          <div
            class="monetization hidden xl:block"
            v-if="monetizationState === 'started'"
          >
            Thank you for supporting us with&nbsp;web&nbsp;monetization!&nbsp;❤️
          </div>
        </nav>
      </div>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      monetizationState: "",
      menuOpen: false,
    };
  },
  mounted() {
    if (!this.$monetization.isEnabled()) {
      this.$monetization.enable();
    }
    this.monetizationState = this.$monetization.getState();
    this.$monetization.onStateChange((event) => {
      this.monetizationState = this.$monetization.getEventStateString(event);
    });
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: Montserrat, -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, sans-serif;
}

.nav a {
  display: flex;
  align-items: center;
  padding: 5px 0;
}

.nav .monetization {
  align-items: center;
  padding: 5px 0;
  text-transform: none;
  align-self: center;
}

.nav a.active--exact:not(.landing--link) {
  color: rgba(255, 255, 255, 0.7);
}

.nav a:hover {
  color: rgba(255, 255, 255, 0.7);
}

.hamburger-button {
  border: none;
  background: none;
}

.menu-items a {
  border-top: 1px solid #ffffff30;
  padding-left: 15px;
}

@screen md {
  .menu-items a {
    border-top: none;
    padding-left: 0;
  }
}
</style>
