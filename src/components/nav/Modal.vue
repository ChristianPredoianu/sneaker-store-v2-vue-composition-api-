<template>
  <div>
    <div class="modal-container">
      <fa
        icon="times"
        type="fas"
        class="modal-container__close"
        @click="closeModal"
      ></fa>

      <h1 class="modal-container__heading">Your Cart</h1>

      <div
        class="product-container"
        v-for="(item, index) in cart"
        :key="item.id"
      >
        <img tag="img" :src="item.image" alt class="product-container__image" />
        <div class="product-info">
          <ul class="product-info__list">
            <li class="product-info__list-item">Brand: {{}}</li>
            <li class="product-info__list-item">Model: {{}}</li>
            <li class="product-info__list-item">Price: {{}} $</li>
            <li class="product-info__list-item">Size: {{}}</li>
            <li class="product-info__list-item">Color: {{}}</li>
          </ul>

          <p class="product-info__remove" @click="findProductToRemove(index)">
            Remove item
          </p>
        </div>
      </div>
      <div class="checkout">
        <h1 class="checkout__empty-message">
          Your cart is empty!
        </h1>
        <div>
          <p class="checkout__shipping">Shipping: Free</p>
          <p class="checkout__amount">Total Price: {{}} $</p>
        </div>
      </div>
      <button class="modal-container__button">Checkout</button>
      <p class="modal-container__close-modal">Close Cart</p>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue';

export default {
  setup(props, { emit }) {
    let cart = reactive(JSON.parse(localStorage.getItem('cartState')));

    function closeModal() {
      emit('close-modal', false);
    }

    function findProductToRemove(index) {
      if (localStorage.getItem('cartState') !== []) {
        const found = cart.indexOf(index);
        console.log(found);
        cart.splice(found, 1);

        localStorage.setItem('cartState', JSON.stringify(cart));
      } else {
        localStorage.clear();
      }
    }

    return { closeModal, cart, findProductToRemove };
  },
};
</script>

<style lang="scss" scoped>
.modal-container::-webkit-scrollbar {
  width: 0.8rem;
}

.modal-container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2);
}

.modal-container::-webkit-scrollbar-thumb {
  background-color: #000000;
  outline: none;
}

.modal-container {
  @include flex(flex, column, start, center);
  position: absolute;
  top: 7rem;
  right: 20%;
  width: 55vw;
  height: 90vh;
  z-index: 100;
  border: 0.2rem solid $color-primary;
  background-color: #f3f3f3;
  overflow-y: scroll;

  @include respond(tab-land) {
    width: 80vw;
    right: 10%;
  }
  @include respond(phone) {
    width: 95vw;
    right: 2%;
    top: 12vh;
  }

  &__close {
    position: absolute;
    top: 2%;
    right: 5%;
    width: 5%;
    cursor: pointer;
  }

  &__heading {
    font-size: 3rem;
    text-align: center;
    margin: 5rem 0;
    text-transform: uppercase;

    @include respond(phone) {
      margin-top: 10rem;
    }
  }

  &__button {
    font-size: 2rem;
    padding: 2rem 5rem;
    letter-spacing: 0.2rem;
    margin-bottom: 3rem;
    outline: none;
    border: none;
    background-color: $color-primary;
    color: $color-secondary;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s;
    backface-visibility: hidden;

    &:hover {
      transform: scale(1.03);
      background-color: #0f00da;
      color: $color-secondary;
      outline: none;
      border: none;
    }
    &:active {
      outline: none;
      border: none;
    }
  }

  &__close-modal {
    font-size: 2.5rem;
    padding: 3rem 0;
    color: #000000;
    cursor: pointer;
  }
}

.product-container {
  @include flex(flex, row, space-around, center);
  margin: 0 0 5rem 0;

  &__image {
    width: 30%;

    @include respond(phone) {
      margin-right: 5rem;
    }
  }
}

.product-info {
  width: 50%;
  &__list {
    list-style: none;
  }

  &__list-item {
    font-size: 2rem;
    font-weight: 700;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
    input {
      width: 10rem;
      margin: 2rem 0;
    }
    input[type='number']::-webkit-inner-spin-button {
      opacity: 1;
    }
  }

  &__remove {
    color: #f11010;
    margin-top: 1rem;
    font-size: 1.8rem;
    cursor: pointer;
  }
}

.checkout {
  padding: 5rem;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__empty-message {
    font-size: 4rem;
    margin-bottom: 5rem;

    @include respond(phone) {
      font-size: 2rem;
    }
  }

  &__shipping {
    margin-bottom: 2rem;
  }

  &__amount {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: bold;
  }
}
</style>
