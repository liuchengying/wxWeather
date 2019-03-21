
const STOP_ANIMATION = 'stop'
const START_ANIMATION = 'start'

class Weather {
  constructor(context, width, height, option = {}) {
    this.opt = option || {}
    this.context = context
    this.timer = null
    this.status = STOP_ANIMATION
    this.width = width
    this.height = height
    this._init()
  }

  _init() {}
  _drawing() {}
  start() {
    if(this.status !== START_ANIMATION) {
      this.status = START_ANIMATION
      this.timer = setInterval(() => {
        this._drawing()
      }, 30)
      return this
    }
  }
  stop() {
    this.status = STOP_ANIMATION
    clearInterval(this.timer)
    this.timer = null
    return this
  }
}

export default Weather
