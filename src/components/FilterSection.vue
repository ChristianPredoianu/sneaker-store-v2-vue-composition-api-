<template>
  <div>
    <hr />
    <section class="filters">
      <div class="avaliable-colors">
        <select
          class="avaliable-colors__select"
          v-model="selectOptions.color"
          @change="sendSelectedOptions"
        >
          <option value="All colors">All colors</option>
          <option
            v-for="color in getAvaliableColors"
            :key="color.id"
            value="color"
            >{{ color }}</option
          >
          <!--   <option value="brown">brown</option>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="white">white</option>
          <option value="silver">silver</option>
          <option value="cream">cream</option> -->
        </select>
      </div>

      <div class="avaliable-sizes">
        <select
          class="avaliable-sizes__select"
          v-model="selectOptions.size"
          @change="sendSelectedOptions"
        >
          <option value="All sizes">All sizes</option>
          <option
            v-for="size in getAvaliableSizes"
            :key="size.id"
            :value="size"
            >{{ size }}</option
          >
        </select>
      </div>
    </section>
    <hr />
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import shoeData from '../../public/data.json';

export default {
  setup(props, { emit }) {
    const selectOptions = reactive({
      color: 'All colors',
      size: 'All sizes',
    });

    function sendSelectedOptions() {
      emit('options', selectOptions);
    }

    const getAvaliableColors = computed(() => {
      const avaliableColors = [];
      shoeData.forEach((color) => {
        avaliableColors.push(color.color);
      });
      return [...new Set(avaliableColors)];
    });

    const getAvaliableSizes = computed(() => {
      const avaliableSizes = [];
      shoeData.forEach((size) => {
        avaliableSizes.push(...size.size);
      });
      return [...new Set(avaliableSizes)].sort();
    });
    console.log(getAvaliableColors);
    sendSelectedOptions();

    return {
      selectOptions,
      getAvaliableColors,
      getAvaliableSizes,
      sendSelectedOptions,
    };
  },
};
</script>

<style lang="scss" scoped>
hr {
  width: 95%;
  margin: 0 auto;
}

.filters {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 6rem 0;
}

.avaliable-colors {
  margin: 2rem 1rem 0 0;

  &__select {
    @include select;
  }
}

.avaliable-sizes {
  margin-top: 2rem;

  &__select {
    @include select;
  }
}
</style>
