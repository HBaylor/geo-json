<template>
  <div>
    <h2>login</h2>
    <el-button></el-button>
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
    this.login()
  },
  methods: {
    login: function () {
      this.axios('Login', {
        username: 'cs',
        passworld: '1'
      }).then(res => {
        console.log(res, '-------------')
      })
    }
  }
}
</script>
<style lang="less">


</style>
