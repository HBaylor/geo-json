<template>
  <div>
    <h2>login</h2>
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
  mounted () {
    
  },
  methods: {

  }
}
</script>
<style lang="less">


</style>
