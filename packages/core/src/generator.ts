import ICursor from './cursor'
import type { SelectorMap } from './types'

function createCursor() {
  let iCursor: ICursor = null
  return (selector: string | string[] | SelectorMap) => {
    if (iCursor)
      return iCursor
    const body = document.querySelector('body')
    const createClassDiv = (classname: string[]) => {
      const div = document.createElement('div')
      div.classList.add(...classname)
      return div
    }

    const iCursorInner = createClassDiv(['icursor__inner', 'icursor'])
    const iCursorOuter = createClassDiv(['icursor__outer', 'icursor'])

    body?.append(iCursorInner, iCursorOuter)

    iCursor = new ICursor(selector)
    return iCursor
  }
}

export default createCursor()
