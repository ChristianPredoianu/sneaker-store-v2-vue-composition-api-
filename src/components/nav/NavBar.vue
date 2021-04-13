<template>
  <div>
    <nav class="navbar">
      <ul class="nav-list">
        <router-link to="/" tag="li">
          <li class="nav-list__item">Home</li>
        </router-link>
        <router-link to="/Men" tag="li">
          <li class="nav-list__item">Men</li>
        </router-link>

        <router-link to="/Women" tag="li">
          <li class="nav-list__item">Women</li>
        </router-link>
      </ul>
      <div class="cart">
        <fa
          icon="cart-plus"
          type="fas"
          class="cart__logo"
          @click="toggleModal"
        ></fa>

        <span class="cart__count">{{
          cartCount !== 0 ? cartCount.length : cartCount
        }}</span>
      </div>
    </nav>
    <transition>
      <Modal class="modal" v-if="isModalOpen" @close-modal="closeModal" />
    </transition>
  </div>
</template>

<script>
import Modal from '@/components/nav/Modal.vue';
import { ref } from 'vue';

export default {
  components: {
    Modal,
  },

  setup() {
    let isModalOpen = ref(false);
    let cartCount = ref(0);

    //Since LocalStorage isn't reactive and Vue only watches data in components
    //This hack is not so pretty but gets the value from localstorage every x seconds
    //Vuex would be an alternative for persisting cart state
    /*  setInterval(() => {
      localStorage.getItem('cartState') !== null
        ? (cartCount.value = JSON.parse(localStorage.getItem('cartState')))
        : (cartCount.value = 0);
    }, 1000); */

    function toggleModal() {
      isModalOpen.value = !isModalOpen.value;
    }

    function closeModal(value) {
      if (value !== undefined) isModalOpen.value = value;
    }

    closeModal();

    return { isModalOpen, toggleModal, closeModal, cartCount };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  @include flex(flex, row, space-between, center);
  position: relative;
  height: 7vh;
  background-color: $color-primary;
  color: $color-secondary;

  @include respond(tab-port) {
    height: 10vh;
  }

  a {
    text-decoration: none;
  }
}

.nav-list {
  display: flex;
  align-items: center;
  font-size: 2rem;
  list-style: none;

  @include respond(phone) {
    font-size: 1.5rem;
  }

  &__item {
    margin-left: 5rem;
    cursor: pointer;
    letter-spacing: 0.5rem;
    color: #ffffff;

    @include respond(phone) {
      margin-left: 2rem;
    }

    &:hover {
      border-bottom: 1px solid #ffffff;
      padding-bottom: 2px;
    }
  }
}

.cart {
  display: flex;
  align-items: center;
  margin-right: 20rem;

  @include respond(tab-port) {
    margin-right: 5rem;
  }

  @include respond(phone) {
    margin-right: 2rem;
  }

  &__logo {
    width: 3.5rem;
    cursor: pointer;

    @include respond(tab-port) {
      font-size: 2.5rem;
    }
  }

  &__count {
    font-size: 2rem;
    margin-left: 2rem;
  }
}
</style>
