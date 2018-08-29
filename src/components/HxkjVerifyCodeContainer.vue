<template>
  <div class="container">
    <canvas class="canvas" @click="refresh"></canvas>
  </div>
</template>

<script>
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const randomColor = (min, max) => {
  var r = randomNumber(min, max)
  var g = randomNumber(min, max)
  var b = randomNumber(min, max)
  return 'rgb(' + r + ',' + g + ',' + b + ')'
}

const alphabets = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]

export default {
  name: 'hxkj-verify-code-container',
  data () {
    return {
      code: ''
    }
  },
  mounted () {
    this.create()
  },
  methods: {
    create () {
      var thiz = this
      let container = document.querySelector('.container')
      let canvas = document.querySelector('.canvas')
      let height = container.offsetHeight
      let width = container.offsetWidth
      let ctx, txt, x, y

      this.code = ''

      if (canvas.getContext) {
        ctx = canvas.getContext('2d')
        ctx.textBaseline = 'middle'

        ctx.fillStyle = randomColor(220, 230)
        ctx.fillRect(0, 0, width, height)

        for (var i = 1; i <= 6; i++) {
          txt = alphabets[randomNumber(0, alphabets.length)]
          thiz.code += txt
          x = width / 7 * i
          y = height / 2

          ctx.font = '24px Consolas'
          ctx.fillStyle = randomColor(50, 160)
          ctx.shadowBlur = randomNumber(-3, 3)
          ctx.translate(x, y)
          ctx.fillText(txt, 0, 0)
          ctx.translate(-x, -y)
        }

        for (let i = 0; i < 6; i++) {
          ctx.strokeStyle = randomColor(40, 180)
          ctx.beginPath()
          ctx.moveTo(randomNumber(0, width / 2), randomNumber(0, height / 2))
          ctx.lineTo(randomNumber(0, width), randomNumber(0, height))
          ctx.stroke()
        }
      }
      this.$emit('update:code', this.code)
    },
    refresh () {
      this.create()
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  user-select: none;
}
.canvas {
  cursor: pointer;
}
</style>
