<template>
  <div>
    <section class="subnav">
      <div class="subnav-container">
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

  &__heading {
    font-size: 5rem;
  }
}
</style>
