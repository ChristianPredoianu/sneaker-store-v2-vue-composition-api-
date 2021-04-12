<template>
  <div>
    <NavBar />
    <SubNav />
    <FilterSection @options="setSelectedOptions" />
    <section class="shoes">
      <Shoe
        v-for="shoe in filterShoes(
          'Men',
          selectedOptions.color,
          selectedOptions.size
        )"
        :key="shoe.id"
        :shoe="shoe"
      />

      <h1
        v-if="
          filterShoes('Men', selectedOptions.color, selectedOptions.size)
            .length === 0
        "
        class="no-products-message"
      >
        No selected colors or sizes in stock
      </h1>
    </section>
  </div>
</template>

<script>
import NavBar from '@/components/nav/NavBar.vue';
import SubNav from '@/components/nav/SubNav.vue';
import FilterSection from '@/components/FilterSection.vue';
import Shoe from '@/components/Shoe.vue';
import { useShoeFilter } from '@/shared-logic/useShoeFilter';

export default {
  components: {
    NavBar,
    SubNav,
    FilterSection,
    Shoe,
  },

  setup() {
    const {
      selectedOptions,
      setSelectedOptions,
      filterShoes,
    } = useShoeFilter();

    return { setSelectedOptions, selectedOptions, filterShoes };
  },
};
</script>

<style lang="scss" scoped>
.shoes {
  display: flex;
  flex-wrap: wrap;
}

.no-products-message {
  width: 100%;
  font-size: 2rem;
  text-align: center;
  margin-top: 3rem;
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
