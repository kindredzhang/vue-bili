<template>
  <BiliLayout>

    <BiliHeader :style="{ height: '155px', color: '#fff' }">
        <PageHeader></PageHeader>
    </BiliHeader>

    <BiliLayout>
      <!-- <BiliSider :style="{ color: '#fff' }">sider</BiliSider> -->
      <BiliContent>
        <slot />
      </BiliContent>
    </BiliLayout>

    <BiliFooter>footer</BiliFooter>
  </BiliLayout>
</template>

<script setup lang="ts">
import PageHeader from '../components/page-header/PageHeader.vue'
import BiliLayout from '../components/layout/Layout.vue'
import BiliHeader from '../components/layout/Header.vue'
import BiliFooter from '../components/layout/Footer.vue'
import BiliContent from '../components/layout/Content.vue'
import BiliSider from '../components/layout/Sider.vue'

</script>
