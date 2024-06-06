<template>
  <Layout>
    <!-- <h1>花果山大圣-Bilibili</h1> -->
    <a-row :gutter="16" style="margin-top: 20px">
      <a-col :span="12">
        <a-carousel autoplay>
          <div v-for="item in 5">
            <img class="car-imgs" :src="`/0${item + 1}.jpg`" alt="" />
          </div>
        </a-carousel>
      </a-col>
      <a-col :span="12">
        <BiliSlider></BiliSlider>
      </a-col>
    </a-row>

    <h1>indexPage</h1>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/default.vue'
import BiliSlider from '@/components/slider/Slider.vue'
</script>

<style lang="scss">
.car-imgs {
  width: 100%;

  height: 400px;
}
</style>
