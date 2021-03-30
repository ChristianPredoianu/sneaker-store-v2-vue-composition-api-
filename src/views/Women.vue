<template>
  <div>
    <NavBar />
    <SubNav />
    <FilterSection />
    <section class="shoes">
      <Shoe v-for="shoe in womenShoes" :key="shoe.id" :shoe="shoe" />
    </section>
  </div>
</template>

<script>
import NavBar from '@/components/nav/NavBar.vue';
import SubNav from '@/components/nav/SubNav.vue';
import FilterSection from '@/components/FilterSection.vue';
import Shoe from '@/components/Shoe.vue';
import shoesData from '../../public/data.json';
import { computed } from 'vue';

export default {
  components: {
    NavBar,
    SubNav,
    FilterSection,
    Shoe,
  },

  setup() {
    const womenShoes = computed(() => {
      return shoesData.filter((shoe) => shoe.gender === 'Women');
    });

    return { womenShoes };
  },
};
</script>

<style lang="scss" scoped>
.shoes {
  display: flex;
  flex-wrap: wrap;
}
</style>
