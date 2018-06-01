<template>
  <div>
    <h2 @click="getCaname">login</h2>
    <router-link to="/list/o1">手机</router-link>
    <router-link to="/list/o2">平板</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: 'vue'
    }
  },
  methods: {
    getCaname() {
      console.log('相机')
    }
  }
}
</script>
<style lang="scss">


</style>
