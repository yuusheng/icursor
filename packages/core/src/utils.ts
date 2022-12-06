interface TranslateType {
  x?: number
  y?: number
  rotation?: number
  width?: number
  height?: number
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

  const translate = `translate(${translateType.x || 0}px, ${translateType.y || 0}px)`

  const route = translateType.rotation ? `rotate(${translateType.rotation}deg)` : ''

  const scale = `scale(${translateType.width || 1}, ${translateType.height || 1})`

  element.style.transform = `${translate} ${route} ${scale}`
  element.style.transition = `${duration * 1000}ms`
}
