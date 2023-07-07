<template>
  <div class="footer bg-white">
    <div class="wrapper">
      <div class="flex justify-between flex-col lg:flex-row">
        <div>
          <img
            src="../assets/images/logo-black-text.svg"
            alt="logo"
          />
          <div class="mt-4">Made around the world.</div>
        </div>

        <div class="flex flex-wrap mt-40px-on-mobile">
          <div
            v-for="(item, index) in list"
            :key="index"
            class="column"
          >
            <div class="title text-xl font-semibold mb-4">{{ item.title }}</div>
            <div
              v-for="(subItem, subIndex) in item.subList"
              :key="subIndex"
              class="item option"
            >
              {{ subItem }}
            </div>
          </div>
        </div>

        <div class="subscribe mt-40px-on-mobile">
          <div class="title text-xl font-semibold mb-4">
            Subscribe to our newsletter.
          </div>

          <div class="item">
            Want to stay up to date with news and updates about our product?
            Subscribe.
          </div>

          <div
            class="email flex justify-between items-center p-4 rounded-lg mt-6 cursor-pointer"
          >
            <span>email@provider.com</span>
            <img
              src="../assets/icons/arrow-right.svg"
              alt="icon"
              class="w-4"
            />
          </div>

          <div class="mt-6 text-xs">
            By subscribing to our newsletter you agree to our privacy policy and
            will get commercial communication.
          </div>
        </div>
      </div>

      <div class="diviner"></div>

      <div class="flex lg:justify-between lg:items-center flex-wrap-reverse">
        <div class="flex justify-between mt-24px-on-mobile flex-wrap-reverse">
          <div class="pr-20 mt-40px-on-mobile">© 2022 EventUp, Inc.</div>
          <div class="flex justify-between flex-wrap">
            <div class="policy-item option">Privacy Policy</div>
            <div class="policy-item option">Terms of Service</div>
            <div class="policy-item option">Cookie Settings</div>
          </div>
        </div>

        <div class="flex items-center">
          <div
            class="languages flex justify-between items-center cursor-pointer rounded-lg mr-6 py-3 px-4"
          >
            <img
              src="../assets/icons/US-icon.svg"
              alt="flag"
            />
            <span>English (US)</span>
            <img
              src="../assets/icons/arrow-down.svg"
              alt="icon"
            />
          </div>

          <div class="socials flex">
            <img
              src="../assets/icons/twitter.svg"
              alt="icon"
              class="cursor-pointer"
            />
            <img
              src="../assets/icons/facebook.svg"
              alt="icon"
              class="cursor-pointer"
            />
            <img
              src="../assets/icons/linkedin.svg"
              alt="icon"
              class="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const list = reactive([
  {
    title: "Products",
    subList: ["Conference", "Pricing", "Solution"],
  },
  {
    title: "Company",
    subList: ["About", "Contact", "Career", "Blog"],
  },
  {
    title: "Support",
    subList: ["Contact Us", "Support Policy", "Talk To Sales"],
  },
]);
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
@import "../assets/styles/responsive.scss";

.footer {
  color: #6f7074;
}

.wrapper {
  padding: 60px 80px;
}

@include respond-to("mobile") {
  .wrapper {
    padding: 50px 24px;
  }
}

.column {
  @include respond-to("mobile") {
    width: 50%;
  }

  @include respond-to("desktop") {
    & + .column {
      margin-left: 56px;
    }
  }
}

.title {
  color: $neutral-color-800;
}

.item {
  & + .item {
    margin-top: 8px;
  }
}

.option {
  &:hover {
    color: $primary-color;
    text-decoration: underline;
    cursor: pointer;
  }
}

.subscribe {
  width: 286px;
}

.email {
  border: 1px solid $neutral-color-50;
}

.diviner {
  background-color: $neutral-color-50;
  height: 1px;
  margin: 24px 0;
}

.policy-item {
  @include respond-to("desktop") {
    & + .policy-item {
      margin-left: 24px;
    }
  }

  @include respond-to("mobile") {
    width: 50%;
    margin-top: 8px;
  }
}

.languages {
  width: 180px;
  border: 1px solid $neutral-color-50;
}

.socials {
  img + img {
    margin-left: 16px;
  }
}
</style>
