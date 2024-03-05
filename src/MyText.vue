<template>
  <div>
    <input type="text" v-model="text">
    <button type="button" @click="$emit('text',text)">전달</button>
  </div>
</template>
<script>
export default {
  name:'MyText',
  data(){
    return{text:""}
  }
}
</script>
<style>
  
</style>