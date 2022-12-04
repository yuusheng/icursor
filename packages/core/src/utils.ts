interface TranslateType {
  x?: number
  y?: number
  rotation?: number
  width?: number
  height?: number
}

export function transform(element: HTMLElement, duration: number, translateType: TranslateType) {
  const translate = `translate(${translateType.x || 0}px, ${translateType.y || 0}px)`

  const route = translateType.rotation ? `rotate(${translateType.rotation}deg)` : ''

  const scale = `scale(${translateType.width || 0}, ${translateType.height || 0})`

  element.style.transform = `${translate} ${route} ${scale}`
  element.style.transition = `${duration * 1000}ms`
}
