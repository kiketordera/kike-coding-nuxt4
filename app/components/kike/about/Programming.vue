<template>
  <div class="program">
    <h3>
      Coding
    </h3>
    <div class="skills">
      <div>
        <img src="~assets/svg/kk/swift-language.svg" alt="">
        <span>
          Swift
        </span>
      </div>
      <div>
        <img src="~assets/svg/kk/swiftui.svg" alt="">
        <span>
          SwiftUI
        </span>
      </div>
      <div>
        <img src="~assets/svg/kk/dart-language.svg" alt="">
        <span>
          Dart
        </span>
      </div>
      <div>
        <img src="~assets/svg/kk/flutter-language.svg" alt="">
        <span>
          Flutter
        </span>
      </div>
      <div>
        <img src="~assets/svg/kk/html-language.svg" alt="">
        <span>
          HTML
        </span>
      </div>
      <div>
        <img src="~assets/svg/kk/css-style.svg" alt="">
        <span>
          CSS/SASS
        </span>
      </div>
      <div>
        <img src="~assets/svg/kk/tailwind.svg" alt="">
        <span>
          Tailwind
        </span>
      </div>
      <div>
        <img src="~assets/svg/kk/js.svg" alt="">
        <span>
          JavaScript
        </span>
      </div>
      <div>
        <img src="~assets/svg/kk/typescript-language.svg" alt="">
        <span>
          TypeScript
        </span>
      </div>
      <div>
        <img src="~assets/svg/kk/vue-language.svg" alt="">
        <span>
          Vue.js
        </span>
      </div>
      <div>
        <img src="~assets/svg/kk/nuxt.svg" alt="">
        <span>
          Nuxt
        </span>
      </div>
      <div>
        <img src="~assets/svg/kk/node.svg" alt="">
        <span>
          Node.js
        </span>
      </div>
      <div>
        <img src="~assets/svg/kk/docker.svg" alt="">
        <span>
          Docker
        </span>
      </div>
      <div>
        <img src="~assets/svg/kk/firebase.svg" alt="">
        <span>
          Firebase
        </span>
      </div>

      <div>
        <img src="~assets/svg/kk/go-language.svg" alt="">
        <span>
          Golang
        </span>
      </div>
      <div>
        <img src="~assets/svg/kk/java-language.svg" alt="">
        <span>
          JAVA
        </span>
      </div>
      <div>
        <img src="~assets/svg/kk/ux.svg" alt="">
        <span>
          UX
        </span>
      </div>
      <div>
        <img src="~assets/svg/kk/figma-icon.svg" alt="">
        <span>
          Figma
        </span>
      </div>
      <div>
        <img src="~assets/svg/kk/ui.svg" alt="">
        <span>
          UI
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.program {
  @apply py-4 w-full;

  h3 {
    @apply lg:text-4xl text-xl tracking-wider mb-6 w-1/2 my-8;
    font-family: $source-code-bold;
    font-weight: 600;
    color: $title-color;
  }

  .skills {
    @apply grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center gap-2 mb-4;

    div {
      @apply flex items-center mr-4 mb-3;
      img {
        @apply mr-2 w-7 h-7;
      }
    }

    span {
      @apply lg:text-base text-sm;
      color: $h2-color;
    }
  }

  p {
    @apply text-xl items-center sm:ml-5 py-3 mb-2;
    color: $h2-color;
  }
}</style>
