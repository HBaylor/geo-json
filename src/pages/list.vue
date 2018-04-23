<template>
  <div>
    <h2>list</h2>
    <el-button @click="text">这个是测试</el-button>
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
    text () {
      this.$router.push('/')
    },
    login: function () {
      // this.axios('Login', {
      //   username: 'cs',
      //   passworld: '1'
      // }).then(res => {
      //   console.log(res, '-------------')
      // })
    }
  }
}
</script>
<style lang="less">


</style>
