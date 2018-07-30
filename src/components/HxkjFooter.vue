<template>
  <div class="footer">
    {{`&#169; ${thisYear} ${support} 提供技术支持`}}
  </div>
</template>

<script>
export default {
  name: 'hxkj-footer',
  data () {
    var _vm = this

    return {
      support: _vm.$store.state.support
    }
  },
  computed: {
    thisYear () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
div.footer {
  display: flex;
  align-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  color: #777;
  border-top: solid .5px #ddd;
}
</style>
