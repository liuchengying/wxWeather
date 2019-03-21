import Weather from './Weather.js'
class Rain extends Weather {
  _init() {
    this.context.setLineWidth(2)
    this.context.setLineCap('round')
    let height = this.height
    let width = this.width
    let counts = this.opt.counts || 100
    let speedCoefficient = this.opt.speedCoefficient
    let speed = speedCoefficient * height
    this.animationArray = []
    let arr = this.animationArray

    for (let i = 0; i < counts; i++) {
      let d = {
        x: Math.random() * width,
        y: Math.random() * height,
        len: 2 * Math.random(),
        xs: -1,
        ys: 10 * Math.random() + speed,
        color: 'rgba(255,255,255,0.1)'
      }
      arr.push(d)
    }
  }

  _drawing() {
    let arr = this.animationArray
    let ctx = this.context
    ctx.clearRect(0, 0, this.width, this.height)
    for (let i = 0; i < arr.length; i++) {
      let s = arr[i]
      ctx.beginPath()
      ctx.moveTo(s.x, s.y)
      ctx.lineTo(s.x + s.len * s.xs, s.y + s.len * s.ys)
      ctx.setStrokeStyle(s.color)
      ctx.stroke()
    }
    ctx.draw()
    return this.update()
  }

  update() {
    let width = this.width
    let height = this.height
    let arr = this.animationArray
    for (let i = 0; i < arr.length; i++) {
      let s = arr[i]
      s.x = s.x + s.xs
      s.y = s.y + s.ys
      if (s.x > width || s.y > height) {
        s.x = Math.random() * width
        s.y = -10
      }
    }
  }
}

export default Rain