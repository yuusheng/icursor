import { isObject, setAttribute, toArray, transform } from './utils'
import type { SelectorMap } from './types'

class Cursor {
  private cursorOuter: HTMLElement
  private cursorOuterBox: DOMRect
  private cursorInner: HTMLElement
  private cursorInnerBox: DOMRect
  private clientX: number
  private clientY: number
  private stuckX: number
  private stuckY: number
  private isStuck: boolean
  private cursorOriginals: { width: number; height: number }
  private selectors: string[]
  private selector: string | SelectorMap | string[]

  constructor(selector: string | SelectorMap | string[]) {
    this.selector = selector
    this.selectors = isObject(selector) ? Object.keys(selector) : toArray(selector)
    this.initCursor()
    this.initHovers()
  }

  private initCursor() {
    this.cursorOuter = document.querySelector('.cursor__outer')!
    this.cursorInner = document.querySelector('.cursor__inner')!
    this.cursorOuterBox = this.cursorOuter.getBoundingClientRect()
    this.cursorInnerBox = this.cursorInner.getBoundingClientRect()

    this.isStuck = false
    this.clientX = -100
    this.clientY = -100

    this.cursorOriginals = {
      width: this.cursorOuter.offsetWidth,
      height: this.cursorOuter.offsetHeight,
    }

    document.addEventListener('mousemove', (e) => {
      this.clientX = e.clientX
      this.clientY = e.clientY
    })

    const render = () => {
      setAttribute(this.cursorInner, { x: this.clientX, y: this.clientY })
      if (!this.isStuck) {
        transform(this.cursorOuter, {
          x: this.clientX - this.cursorOuterBox.width / 2,
          y: this.clientY - this.cursorOuterBox.height / 2,
        })
      }
      requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
  }

  private initHovers() {
    let curClassName: string
    const handleMouseEnter = (e: Event) => {
      this.isStuck = true
      this.stuckX = this.clientX
      this.stuckY = this.clientY
      const target = (e.currentTarget as HTMLElement)
      const linkBox = target.getBoundingClientRect()

      transform(this.cursorOuter, 0.2, {
        x: linkBox.left,
        y: linkBox.top,
        width: linkBox.width,
        height: linkBox.height,
      })
      if (isObject(this.selector)) {
        const className = Array.from((e.target as Element).classList).filter(className => !!this.selector[`.${className}`])

        curClassName = this.selector[`.${className[0]}`]
        this.cursorOuter.classList.add(curClassName)
      }
    }

    const handleMouseLeave = () => {
      this.isStuck = false

      const { height, width } = this.cursorOriginals
      transform(this.cursorOuter, 0.5, {
        width,
        height,
      })

      this.cursorOuter.classList.remove(curClassName)
    }

    const elements: HTMLElement[] = this.selectors.reduce((pre, cur) => {
      pre.push(...document.querySelectorAll(cur))
      return pre
    }, [])
    elements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    })
  }
}

export default Cursor
