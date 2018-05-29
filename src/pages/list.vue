<template>
  <div>
    <h2>list</h2>
    <el-button @click="text">{{data | formatMoney}}</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: 100000
    }
  },
  mounted () {
    this.login()
    console.log(this.$util.isAry(this.data))
  },
  methods: {
    text () {
      this.$router.push('/')
    },
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
<style lang="scss">


</style>
