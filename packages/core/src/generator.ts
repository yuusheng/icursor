import Cursor from './cursor'
import type { SelectorMap } from './types'
import { toArray } from './utils'

function createCursor() {
  let cursor: Cursor = null
  return (selector: string | SelectorMap | string[]) => {
    if (cursor)
      return cursor
    const body = document.querySelector('body')
    const createClassDiv = (classname: string | string[]) => {
      classname = toArray(classname)
      const div = document.createElement('div')
      div.classList.add(...classname)
      return div
    }

    const cursorInner = createClassDiv(['cursor__inner', 'cursor'])
    const cursorOuter = createClassDiv(['cursor__outer', 'cursor'])

    body?.append(cursorInner, cursorOuter)

    cursor = new Cursor(selector)
    return cursor
  }
}

export default createCursor()
