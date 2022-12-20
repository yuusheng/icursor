export function toArray<T>(item: T | T[]): T[] {
  return Array.isArray(item) ? item : [item]
}

export function isObject(obj: any): obj is object {
  return typeof obj === 'object' && !Array.isArray(obj)
}

export function getBasic(selectors: object | string[] | string) {
  const basicClass = ['.icursor-round', '.icursor-rect']
  let res: string[]

  if (Array.isArray(selectors))
    res = selectors.filter(selector => basicClass.includes(selector))
  else if (typeof selectors === 'object')
    res = Object.keys(selectors).filter(selector => basicClass.includes(selector))
  else
    res = basicClass.includes(selectors) ? [selectors] : []

  return res
}

export function addRectStyle(el: HTMLElement) {
  el.style.borderRadius = '4px'
}

export function addRoundStyle(el: HTMLElement) {
  el.style.borderRadius = '50%'
}
