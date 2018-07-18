<template>
  <div class="test">
    <div id="signature"></div>
    <button type="button">输出签名</button>
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

#signature {
  height: 300px;
  width: 300px;
  background: #f5f5f5;
}

</style>
