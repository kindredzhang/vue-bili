<template>
    <div>
        111/
      {{newVal}}/
      {{title}}/
      {{id}}
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
        title:{
            type:String,
            required:true
        },
        id:{
            type:String,
            required:false
        }
    },
    data() {
      return {
        newVal: '2222',
      };
    },
    methods: {
    },
  });
  </script>
