import { getBasic, isObject, setAttribute, toArray, transform } from './utils'
import type { SelectorMap } from './types'

class ICursor {
  private iCursorOuter: HTMLElement
  private iCursorOuterBox: DOMRect
  private iCursorInner: HTMLElement
  private iCursorInnerBox: DOMRect
  private clientX: number
  private clientY: number
  private stuckX: number
  private stuckY: number
  private isStuck: boolean
  private cursorOriginals: { width: number; height: number }
  private selectors: string[]
  private selector: string | string[] | SelectorMap

  constructor(selector: string | string[] | SelectorMap) {
    this.selector = selector
    this.selectors = isObject(selector) ? Object.keys(selector) : toArray(selector)
    this.initCursor()
    this.initHovers()
  }

  private initCursor() {
    this.iCursorOuter = document.querySelector('.icursor__outer')!
    this.iCursorInner = document.querySelector('.icursor__inner')!
    this.iCursorOuterBox = this.iCursorOuter.getBoundingClientRect()
    this.iCursorInnerBox = this.iCursorInner.getBoundingClientRect()

    this.isStuck = false
    this.clientX = -100
    this.clientY = -100

    this.cursorOriginals = {
      width: this.iCursorOuter.offsetWidth,
      height: this.iCursorOuter.offsetHeight,
    }

    document.addEventListener('mousemove', (e) => {
      this.clientX = e.clientX
      this.clientY = e.clientY
    })

    const render = () => {
      setAttribute(this.iCursorInner, { x: this.clientX, y: this.clientY })
      if (!this.isStuck) {
        transform(this.iCursorOuter, {
          x: this.clientX - this.iCursorOuterBox.width / 2,
          y: this.clientY - this.iCursorOuterBox.height / 2,
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

      const option = {
        x: linkBox.left,
        y: linkBox.top,
        width: linkBox.width,
        height: linkBox.height,
      }
      const basic = getBasic(this.selector)
      if (basic.length)
        target.classList.contains('.')

      transform(this.iCursorOuter, 0.2, option)
      if (isObject(this.selector)) {
        const className = Array.from((e.target as Element).classList).filter(className => !!this.selector[`.${className}`])

        curClassName = this.selector[`.${className[0]}`]
        this.iCursorOuter.classList.add(curClassName)
      }
    }

    const handleMouseLeave = () => {
      this.isStuck = false

      const { height, width } = this.cursorOriginals
      transform(this.iCursorOuter, 0.5, {
        width,
        height,
      })

      this.iCursorOuter.classList.remove(curClassName)
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

export default ICursor
