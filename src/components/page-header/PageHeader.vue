<template>
  <div class="bili-header">
    <!-- bar -->
    <div class="bili-header__bar">
      <!-- 左侧  -->
      <ul class="left-entry">
        <li v-for="link in links" :key="link.name">
          <a :href="link.url" class="entry-title">{{ link.name }}</a>
        </li>
      </ul>
      <!-- 右侧  -->
      <ul class="right-entry">
        <li v-if="token" class="right-entry-item" @click="clear">
          <span>花果山大圣</span>
        </li>

        <li v-else class="right-entry-item">
          <router-link to="/login">登录</router-link>
        </li>

        <li class="right-entry-item" v-for="r in rights" :key="r">
            <a href="">{{ r }}</a>
        </li>
        <li>
          <div class="upload-btn">
            <UploadOutlined />
            <span>投稿</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- banner -->
    <div class="bili-header__banner">
      <img class="banner" src="/header-back.png" alt="" />
    </div>

    <div class="bili-header__logo">
      <a href="https://www.bilibili.com/">
        <img src="/logo.png" width="160" height="78" alt="" class="logo-img" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UploadOutlined } from '@ant-design/icons-vue'
const token = false
const links = ref([
  { name: '首页', url: '' },
  { name: '番剧', url: '' },
  { name: '直播', url: '' },
  { name: '游戏中心', url: '' }
  // ...
])

const rights = ref(['创作中心', '稍后再看'])

function clear() {
  //   setToken("")
}
</script>

<style lang="scss">
@import '@/styles/mixin';

@include b(header) {
  min-height: 64px;
  position: relative;
  width: 100%;
  background: #fff;
  @include sub(bar) {
    // color:red;
    position: absolute;
    top: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    height: 64px;
    width: 100%;
    & .left-entry {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      list-style-type: none;
      li {
        margin-right: 10px;
      }
    }
    & .right-entry {
      display: flex;
      align-items: center;
      .right-entry-item {
        display: block;
        flex-shrink: 0;
        margin-right: 5px;
        text-align: center;
        cursor: pointer;
      }
    }
    & .upload-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 16px;
      width: 90px;
      height: 34px;
      border-radius: 8px;
      background: #fb7299;
      color: #fff;
      text-align: center;
      font-size: 14px;
      line-height: 20px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  }
  @include sub(banner) {
    // color:blue;
    position: relative;
    z-index: 0;
    display: flex;
    justify-content: center;
    height: 160px;
    // bac
    .banner {
      width: 100vw;
    }
  }
  @include sub(logo) {
    position: absolute;
    bottom: -10px;
    left: 60px;
  }
  a {
    color: #fff;
  }
  li {
    list-style: none;
  }
}
// .bili-header{

//   .bili-header__bar{

//   }
//   .bili-header__banner{

//   }
// }
</style>
