import Cursor from './cursor'
import type { SelectorMap } from './types'

export function createCursor(selector: string | SelectorMap) {
  let cursor = null
  return addCursorToBody()
  function addCursorToBody() {
    const body = document.querySelector('body')
    const createClassDiv = (classname: string | string[]) => {
      classname = typeof classname === 'string' ? [classname] : classname
      const div = document.createElement('div')
      div.classList.add(...classname)
      return div
    }

    const cursorInner = createClassDiv(['cursor__inner', 'cursor'])
    const cursorOuter = createClassDiv(['cursor__outer', 'cursor'])

    body?.append(cursorInner, cursorOuter)
    if (!cursor)
      cursor = new Cursor(selector)

    return cursor
  }
}

export default createCursor
