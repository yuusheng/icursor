class Cursor {
  cursor: HTMLElement
  cursorInner: HTMLElement
  cursorObjectBox: DOMRect
  cursorBox: DOMRect
  clientX: number
  clientY: number
  stuckX: number
  stuckY: number
  showCursor!: boolean
  isStuck: boolean
  cursorOriginals: any

  constructor() {
    this.initCursor()
    // this.initHovers()
  }

  initCursor() {
    this.cursor = document.querySelector('.cursor')!
    this.cursorInner = document.querySelector('.cursor__inner')!
    this.cursorObjectBox = this.cursorInner.getBoundingClientRect()
    this.cursorBox = this.cursor.getBoundingClientRect()
    // this.easing = Back.easeOut.config(1.7)
    this.isStuck = false
    this.clientX = -100
    this.clientY = -100
    this.showCursor = false

    this.cursorOriginals = {
      width: this.cursorInner.offsetWidth,
      height: this.cursorInner.offsetHeight,
    }

    document.addEventListener('mousemove', (e) => {
      this.clientX = e.clientX
      this.clientY = e.clientY
    })

    const render = () => {
      if (!this.isStuck)
        this.cursor.style.transform = `translate(${this.clientX}px, ${this.clientY}px)`
      requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
  }

  initHovers() {
    const handleMouseEnter = (e: Event) => {
      this.isStuck = true
      this.stuckX = this.clientX
      this.stuckY = this.clientY
      // const target = (e.currentTarget as HTMLElement)
      // const linkBox = target.getBoundingClientRect()

      // const activeItem = document.querySelector('.nav__link.is-active')
      // if (activeItem && this.nav.dataset.lastActive !== target.dataset.index) {
      //   this.nav.dataset.lastActive = activeItem.dataset.index
      //   activeItem.classList.remove('is-active')
      // }

      // TweenMax.to(this.cursor, 0.25, {
      //   x: linkBox.left + linkBox.width / 2 - this.cursorBox.width / 2,
      //   y: linkBox.top + linkBox.height / 2 - this.cursorBox.height / 2 - 0.5,
      // })
      // TweenMax.to(this.cursorInner, 0.2, {
      //   rotation: 0,
      //   width: linkBox.width,
      //   height: linkBox.height,
      // })
    }

    // this.stuckX = this.clientX
    // this.stuckY = this.clientY
    // const target = e.currentTarget
    // const linkBox = target.getBoundingClientRect()
  }
}

export default Cursor
