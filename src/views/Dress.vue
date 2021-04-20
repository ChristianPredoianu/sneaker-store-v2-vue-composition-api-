<template>
  <div>
    <NavBar />
    <SubNav />
    <FilterSection @options="setSelectedOptions" />
    <section class="shoes">
      <Shoe
        v-for="shoe in filterShoesByType(
          'dress',
          selectedOptions.color,
          selectedOptions.size
        )"
        :key="shoe.id"
        :shoe="shoe"
      />

      <h1
        v-if="
          filterShoesByType(
            'dress',
            selectedOptions.color,
            selectedOptions.size
          ).length === 0
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
import { useShoeFilter } from '@/shared-logic/use-shoe-filter';

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
      filterShoesByType,
    } = useShoeFilter();

    return {
      selectedOptions,
      setSelectedOptions,
      filterShoesByType,
    };
  },
};
</script>

<style lang="scss" scoped>
.shoes {
  display: flex;
  flex-wrap: wrap;
}

.no-products-message {
  @include no-products-message;
}
</style>
