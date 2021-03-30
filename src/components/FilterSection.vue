<template>
  <div>
    <hr />
    <section class="filters">
      <div class="colors">
        <div class="avaliable-colors">
          <select
            class="avaliable-colors__select"
            v-model="selectOptions.color"
            @change="sendSelectedOptions"
          >
            <option value="All colors">All colors</option>
            <option value="black">black</option>
            <option value="brown">brown</option>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="white">white</option>
            <option value="silver">silver</option>
            <option value="cream">cream</option>
          </select>
        </div>
      </div>
      <div class="sizes">
        <div class="avaliable-sizes">
          <select
            class="avaliable-sizes__select"
            v-model="selectOptions.size"
            @change="sendSelectedOptions"
          >
            <option value="All sizes">All sizes</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
          </select>
        </div>
      </div>
    </section>
    <hr />
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue';

export default {
  setup(props, { emit }) {
    const selectOptions = reactive({
      color: 'All colors',
      size: 'All sizes',
    });

    function sendSelectedOptions() {
      emit('options', selectOptions);
    }

    onMounted(() => {
      sendSelectedOptions();
    });

    return { selectOptions, sendSelectedOptions };
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

.colors {
  .avaliable-colors {
    margin: 2rem 1rem 0 0;

    &__select {
      @include select;
    }
  }
}

.sizes {
  .avaliable-sizes {
    margin-top: 2rem;

    &__select {
      @include select;
    }
  }
}
</style>
