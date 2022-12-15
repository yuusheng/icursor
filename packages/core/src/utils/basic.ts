export function toArray<T>(item: T | T[]): T[] {
  return Array.isArray(item) ? item : [item]
}

export function isObject(obj: any): obj is object {
  return typeof obj === 'object' && !Array.isArray(obj)
}

export function addRectStyle(el: HTMLElement) {
  el.style.borderRadius = '4px'
}

export function addRoundStyle(el: HTMLElement) {
  el.style.borderRadius = '50%'
}
