export default id => {
  function GVerify (options) { // 创建一个图形验证码对象，接收options对象为参数
    this.options = { // 默认options参数值
      id: '', // 容器Id
      canvasId: 'verifyCanvas', // canvas的ID
      width: '90', // 默认canvas宽度
      height: '40', // 默认canvas高度
      type: 'blend', // 图形验证码默认类型blend:数字字母混合类型、number:纯数字、letter:纯字母
      code: ''
    }
    this._init()
    this.refresh()
  }

  GVerify.prototype = {
    /** 版本号**/
    version: '1.0.0',

    /** 初始化方法**/
    _init: function () {
      var con = document.getElementById(id)
      var canvas = document.createElement('canvas')
      canvas.id = this.options.canvasId
      canvas.width = this.options.width
      canvas.height = this.options.height
      canvas.style.cursor = 'pointer'
      canvas.style.borderRadius = '4px'
      con.appendChild(canvas)

      var parent = this
      canvas.onclick = function () {
        parent.refresh()
      }
    },

    /** 生成验证码**/
    refresh: function () {
      this.options.code = ''
      var canvas = document.getElementById(this.options.canvasId)
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d')
      }
      ctx.textBaseline = 'middle'

      ctx.fillStyle = randomColor(180, 240)
      ctx.fillRect(0, 0, this.options.width, this.options.height)

      var txtArr = [ 'a', 'b', 'c' ]

      for (var i = 1; i <= 4; i++) {
        var txt = txtArr[randomNum(0, txtArr.length)]
        this.options.code += txt
        ctx.font = '20px SimHei'
        ctx.fillStyle = randomColor(50, 160) // 随机生成字体颜色
        ctx.shadowBlur = randomNum(-3, 3)
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
        var x = this.options.width / 5 * i
        var y = this.options.height / 2
        var deg = randomNum(-30, 30)
        ctx.translate(x, y)
        ctx.rotate(deg * Math.PI / 180)
        ctx.fillText(txt, 0, 0)
        ctx.rotate(-deg * Math.PI / 180)
        ctx.translate(-x, -y)
      }
      /** 绘制干扰线**/
      for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = randomColor(40, 180)
        ctx.beginPath()
        ctx.moveTo(randomNum(0, this.options.width / 2), randomNum(0, this.options.height / 2))
        ctx.lineTo(randomNum(0, this.options.width / 2), randomNum(0, this.options.height))
        ctx.stroke()
      }
      /** 绘制干扰点**/
      for (let i = 0; i < this.options.width / 4; i++) {
        ctx.fillStyle = randomColor(0, 255)
        ctx.beginPath()
        ctx.arc(randomNum(0, this.options.width), randomNum(0, this.options.height), 1, 0, 2 * Math.PI)
        ctx.fill()
      }
    },

    /** 验证验证码**/
    validate: function (code) {
      var verifyCode = code.toLowerCase()
      var vCode = this.options.code.toLowerCase()
      if (verifyCode === vCode) {
        return true
      } else {
        return false
      }
    }
  }

  /** 生成一个随机数**/
  function randomNum (min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
  /** 生成一个随机色**/
  function randomColor (min, max) {
    var r = randomNum(min, max)
    var g = randomNum(min, max)
    var b = randomNum(min, max)
    return 'rgb(' + r + ',' + g + ',' + b + ')'
  }

  return new GVerify(id)
}
