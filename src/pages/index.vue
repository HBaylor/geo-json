<template>
  <div>
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
