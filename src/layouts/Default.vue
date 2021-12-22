<template>
  <div>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
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
