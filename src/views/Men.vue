<template>
  <div>
    <NavBar />
    <SubNav />
    <FilterSection />
    <section class="shoes">
      <Shoe v-for="shoe in shoes" :key="shoe.id" :shoe="shoe" />
    </section>
  </div>
</template>

<script>
import NavBar from '@/components/nav/NavBar.vue';
import SubNav from '@/components/nav/SubNav.vue';
import FilterSection from '@/components/FilterSection.vue';
import Shoe from '@/components/Shoe.vue';
import jsonData from '../../public/data.json';
import { ref } from 'vue';

export default {
  components: {
    NavBar,
    SubNav,
    FilterSection,
    Shoe,
  },

  setup() {
    const shoes = ref(jsonData);

    return { shoes };
  },
};
</script>

<style lang="scss" scoped>
.shoes {
  display: flex;
  flex-wrap: wrap;
}
/* .shoe-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .no-products-message {
    font-size: 4rem;
    margin: 0 auto;
    margin-top: 5rem;
  }
} */
</style>
