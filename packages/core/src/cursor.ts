import { transform } from './utils'
import type { SelectorMap } from './types'

class Cursor {
  cursor: HTMLElement
  cursorInner: HTMLElement
  cursorObjectBox: DOMRect
  cursorBox: DOMRect
  clientX: number
  clientY: number
  stuckX: number
  stuckY: number
  showCursor: boolean
  isStuck: boolean
  cursorOriginals: any
  selectors: string[]
  selector: string | SelectorMap

  constructor(selector: string | SelectorMap) {
    this.selector = selector
    this.selectors = typeof selector === 'object' ? Object.keys(selector) : [selector]
    this.initCursor()
    this.initHovers()
  }

  initCursor() {
    this.cursor = document.querySelector('.cursor')!
    this.cursorInner = document.querySelector('.cursor__inner')!
    this.cursorObjectBox = this.cursorInner.getBoundingClientRect()
    this.cursorBox = this.cursor.getBoundingClientRect()

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
        transform(this.cursor, 0, { x: this.clientX, y: this.clientY })
      requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
  }

  initHovers() {
    let curClassName
    const handleMouseEnter = (e: Event) => {
      console.log('event', e)
      this.isStuck = true
      this.stuckX = this.clientX
      this.stuckY = this.clientY
      const target = (e.currentTarget as HTMLElement)
      const linkBox = target.getBoundingClientRect()

      const { height, width } = this.cursorObjectBox
      transform(this.cursor, 0, {
        x: linkBox.left + linkBox.width / 2 - this.cursorBox.width / 2,
        y: linkBox.top + linkBox.height / 2 - this.cursorBox.height / 2 - 0.5,
      })
      transform(this.cursorInner, 0.2, {
        width: linkBox.width / width,
        height: linkBox.height / height,
      })
      if (typeof this.selector === 'object') {
        const className = Array.from((e.target as Element).classList).filter(className => !!this.selector[`.${className}`])
        console.log('class name', this.selector[`.${className[0]}`])

        curClassName = this.selector[`.${className[0]}`]
        this.cursorInner.classList.add(curClassName)
      }
    }

    const handleMouseLeave = () => {
      this.isStuck = false

      transform(this.cursorInner, 0.25, {
        width: 1,
        height: 1,
      })
      this.cursorInner.classList.remove(curClassName)
    }

    const items = this.selectors.reduce((pre, cur) => {
      pre.push(...document.querySelectorAll(cur))
      return pre
    }, [])
    items.forEach((item) => {
      item.addEventListener('mouseenter', handleMouseEnter)
      item.addEventListener('mouseleave', handleMouseLeave)
    })
  }
}

export default Cursor
