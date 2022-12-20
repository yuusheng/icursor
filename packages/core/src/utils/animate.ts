interface TranslateType {
  x?: number
  y?: number
  rotation?: number
  width?: number
  height?: number
  borderRadius?: string | number
}

export function transform(element: HTMLElement, duration: number, translateType: TranslateType): void
export function transform(element: HTMLElement, translateType: TranslateType): void

export function transform(element: HTMLElement, p1: number | TranslateType, p2?: TranslateType) {
  let duration: number, translateType: TranslateType
  if (typeof p1 === 'number') {
    duration = p1
    translateType = p2
  }
  else {
    duration = 0
    translateType = p1
  }
  const { width, height, x = 0, y = 0, rotation, borderRadius } = translateType

  const transform
    = (x || y ? `translate(${x}px, ${y}px)` : '')
    + (rotation ? `rotate(${rotation}deg)` : '')
  element.style.transform = transform

  if (width)
    element.style.width = `${width}px`
  if (height)
    element.style.height = `${height}px`
  if (borderRadius) {
    element.style.borderRadius
        = typeof borderRadius === 'number'
        ? `${borderRadius}px`
        : borderRadius
  }

  element.style.transition = `${duration * 1000}ms`
}

interface Style extends Partial<CSSStyleDeclaration> {
  x?: number | string
  y?: number | string
}

export function setAttribute(element: HTMLElement, vars: Style) {
  Object.entries(vars)
    .filter(([key]) => key !== 'x' && key !== 'y')
    .forEach(([key, value]) => {
      element.style[key] = value
    })
  const { x, y } = vars
  element.style.transform = `translate(${x}px, ${y}px)`
}
