<template>
  <div>
    <NavBar />
    <SubNav />
    <FilterSection @options="setSelectedOptions" />
    <!--  <Shoe /> -->
    <h1>{{ selectedOptions }}</h1>
    <h1>{{ filterSneakers() }}</h1>
  </div>
</template>

<script>
import NavBar from '@/components/nav/NavBar.vue';
import SubNav from '@/components/nav/SubNav.vue';
import FilterSection from '@/components/FilterSection.vue';
import Shoe from '@/components/Shoe.vue';
import shoesData from '../../public/data.json';
import { useShoeFilter } from '@/shared-logic/useShoeFilter';
export default {
  components: {
    NavBar,
    SubNav,
    FilterSection,
    Shoe,
  },

  setup() {
    const { selectedOptions, setSelectedOptions } = useShoeFilter();

    function filterSneakers() {
      const shoes = shoesData.filter((shoe) => shoe.type === 'sneakers');
      if (
        selectedOptions.color === 'All colors' &&
        selectedOptions.size === 'All sizes'
      )
        return shoes;
      else {
        return shoes.filter((shoe) => {
          return (
            (selectedOptions.color === 'All colors' ||
              selectedOptions.color === shoe.color) &&
            (selectedOptions.size === 'All sizes' ||
              shoe.size.includes(selectedOptions.size))
          );
        });
      }
    }

    return { selectedOptions, setSelectedOptions, filterSneakers };
  },
};
</script>

<style lang="scss" scoped></style>
