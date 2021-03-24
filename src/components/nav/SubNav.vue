<template>
  <div>
    <section class="subnav">
      <div class="subnav-container">
        <p class="subnav-container__paragraph">
          Home >
          <span class="subnav-container__span">{{ $route.name }}</span>
        </p>
        <h1 class="subnav-container__heading">{{ $route.name }}</h1>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.subnav {
  padding: 5rem 0;
}

.subnav-container {
  @include flex(flex, column, space-between, start);
  margin: 0 0 0 5rem;

  &__paragraph {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  &__heading {
    font-size: 5rem;
  }
}
</style>
