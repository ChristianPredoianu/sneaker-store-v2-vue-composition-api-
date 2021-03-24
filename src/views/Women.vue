<template>
  <div>
    <NavBar />
    <SubNav />
    <FilterSection />
    <section class="shoes">
      <Shoe />
    </section>
  </div>
</template>

<script>
import NavBar from '@/components/nav/NavBar.vue';
import SubNav from '@/components/nav/SubNav.vue';
import FilterSection from '@/components/FilterSection.vue';
import Shoe from '@/components/Shoe.vue';
export default {
  components: {
    NavBar,
    SubNav,
    FilterSection,
    Shoe,
  },
};
</script>

<style lang="scss" scoped></style>
