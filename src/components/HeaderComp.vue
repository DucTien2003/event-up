<template>
  <div class="header text-white">
    <div class="wrapper flex justify-between items-center">
      <router-link
        :to="{ name: 'home' }"
        @click="changeSelect(navList[0])"
      >
        <img
          src="../assets/images/logo.svg"
          alt="logo"
        />
      </router-link>

      <div class="flex hide-on-mobile">
        <router-link
          v-for="(navItem, index) in navList"
          :key="index"
          class="nav-item pb-3 cursor-pointer"
          :to="{ name: navItem.to }"
          :class="selected === navItem.title ? 'selected' : ''"
          @click="changeSelect(navItem)"
        >
          {{ navItem.title }}
        </router-link>
      </div>

      <div class="d-flex hide-on-mobile">
        <router-link
          :to="{ name: 'login' }"
          class="btn outline-btn btn-s"
          >Log In</router-link
        >
        <router-link
          :to="{ name: 'sign-up' }"
          class="btn primary-btn btn-s"
          >Sign Up</router-link
        >
      </div>

      <img
        src="../assets/icons/menu.svg"
        alt="icon"
        class="cursor-pointer hide-on-desktop"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const navList = reactive([
  {
    title: "Home",
    to: "home",
  },
  {
    title: "About",
    to: "about",
  },
  {
    title: "Pricing",
    to: "pricing",
  },
  {
    title: "Career",
    to: "career",
  },
  {
    title: "Blog",
    to: "blog",
  },
]);

const selected = ref("Home");

const changeSelect = (navItem) => {
  selected.value = navItem.title;
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
@import "../assets/styles/responsive.scss";

.header {
  background-color: $neutral-color-800;
}

.wrapper {
  padding: 24px 80px;
}

@include respond-to(mobile) {
  .wrapper {
    padding: 24px;
  }
}

.nav-item {
  &.selected {
    border-bottom: 2px solid $primary-color;
  }

  & + .nav-item {
    margin-left: 40px;
  }

  &:hover {
    border-bottom: 2px solid $primary-color;
  }
}
</style>
