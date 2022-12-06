import Cursor from './cursor'
import type { SelectorMap } from './types'

export function createCursor(selector: string | SelectorMap) {
  let cursor = null
  return addCursorToBody()
  function addCursorToBody() {
    const body = document.querySelector('body')

    const cursorInner = document.createElement('div')
    cursorInner.classList.add('cursor__inner')
    const cursorEl = document.createElement('div')
    cursorEl.classList.add('cursor')
    cursorEl.append(cursorInner)
    body?.append(cursorEl)
    if (!cursor)
      cursor = new Cursor(selector)

    return cursor
  }
}

export default createCursor
