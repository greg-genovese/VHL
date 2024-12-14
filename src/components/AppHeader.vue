<template>
  <header class="app-header">
      <a class="app-header-logo" href="https://vistahigherlearning.com/" title="Vista Higher Learning">
        <img
          src="https://vistahigherlearning.com/static/version1733839919/frontend/BigHippo/CorporateSite/en_US/images/logo-white.svg"
          title="Vista Higher Learning" alt="Vista Higher Learning" width="170">
      </a>
    </header>
</template>

<style scoped lang="scss">
.app-header {
  line-height: 1.5;
}

.app-header-logo {
  display: block;
  margin: 0 auto 2rem;
  img {
    display: block;
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  .app-header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .app-header-logo {
    margin: 0 2rem 0 0;
  }
}
</style>
