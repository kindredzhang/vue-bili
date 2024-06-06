<template>
  <div class="slide-banner">
    <div class="banner-wrapper">
      <div class="arrow left-arrow" @click="prevPage">1</div>
      <div class="arrow right-arrow" @click="nextPage">1</div>
      <div class="slide-banner-wrapper" ref="slide">
        <div class="slide-banner-content">
          <div v-for="item in 5" class="slide-page" :key="item">
            <img class="car-imgs" :src="`/0${item + 1}.jpg`" alt="" />
          </div>
        </div>
      </div>
      <div class="dots-wrapper">
        <span
          class="dot"
          v-for="item in 5"
          :key="item"
          :class="{ active: currentPageIndex === item - 1 }"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import { onMounted, ref } from 'vue'

BScroll.use(Slide)

let currentPageIndex = ref(0)
let slider: any = ref()
let slide = ref<HTMLElement>()

onMounted(() => {
  slider = new BScroll(slide.value as HTMLElement, {
    scrollX: true,
    scrollY: false,
    slide: true,
    momentum: false,
    bounce: false
  })

  slider.on('slideWillChange', (page: any) => {
    currentPageIndex.value = page.pageX
  })
})

function prevPage() {
  slider.prev()
}

function nextPage() {
  slider.next()
}
</script>

<style lang="scss">
.slide-banner {
  .banner-wrapper {
    position: relative;
  }
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
    }
    &.left-arrow {
      left: 10px;
      &::before {
        border-width: 10px 16px 10px 0;
        border-color: transparent white transparent transparent;
      }
    }
    &.right-arrow {
      right: 10px;
      &::before {
        border-width: 10px 0 10px 16px;
        border-color: transparent transparent transparent white;
      }
    }
  }
  .slide-banner-wrapper {
    min-height: 1px;
    overflow: hidden;
  }
  .slide-banner-content {
    height: 400px;
    white-space: nowrap;
    font-size: 0;
    .slide-page {
      display: inline-block;
      height: 200px;
      width: 100%;
      line-height: 200px;
      text-align: center;
      font-size: 26px;
    }
  }
  .dots-wrapper {
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #eee;
      &.active {
        width: 20px;
        border-radius: 5px;
      }
    }
  }
}
</style>
