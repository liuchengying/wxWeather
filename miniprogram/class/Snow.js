import Weather from './Weather.js'
class Snow extends Weather {
  _init() {
    let {
      width,
      height
    } = this
    console.log(width)
    let colors = this.opt.colors || ['#ccc', '#eee', '#fff', '#ddd']
    let counts = this.opt.counts || 100

    let speedCoefficient = this.opt.speedCoefficient || 0.03
    let speed = speedCoefficient * height * 0.15

    let radius = this.opt.radius || 2
    this.animationArray = []
    let arr = this.animationArray

    for (let i = 0; i < counts; i++) {
      arr.push({
        x: Math.random() * width,
        y: Math.random() * height,
        ox: Math.random() * width,
        ys: Math.random() + speed,
        r: Math.floor(Math.random() * (radius + 0.5) + 0.5),
        color: colors[Math.floor(Math.random() * colors.length)],
        rs: Math.random() * 80
      })
    }
    console.log(arr)
  }
  _drawing() {
    let arr = this.animationArray
    let context = this.context
    context.clearRect(0, 0, this.width, this.height)
    for (let i = 0; i < arr.length; i++) {
      let {
        x,
        y,
        r,
        color
      } = arr[i]
      context.beginPath()
      context.arc(x, y, r, 0, Math.PI * 2, false)
      context.setFillStyle(color)
      context.fill()
      context.closePath()
    }

    context.draw()
    this._update()
  }
  _update() {
    let {
      width,
      height
    } = this
    let arr = this.animationArray
    let v = this.opt.speedCoefficient / 10
    for (let i = 0; i < arr.length; i++) {
      let p = arr[i]
      let {
        ox,
        ys
      } = p
      p.rs += v
      p.x = ox + Math.cos(p.rs) * width / 2
      p.y += ys
      if (p.x > width || p.y > height) {
        p.x = Math.random() * width
        p.y = -10
      }
    }
  }
}

export default Snow