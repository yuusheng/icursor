import { describe, expect, it } from 'vitest'
import { addRectStyle, addRoundStyle, isObject } from 'packages/core/src/utils'

describe('utils test', () => {
  it('should be object', () => {
    const obj = {}
    expect(isObject(obj)).toBe(true)

    const arr = []
    expect(isObject(arr)).toBe(false)

    const str = ''
    expect(isObject(str)).toBe(false)
  })

  it('should be rounded', () => {
    const el = document.createElement('div')

    addRectStyle(el)
    expect(el.style.borderRadius).toBe('4px')

    addRoundStyle(el)
    expect(el.style.borderRadius).toBe('50%')
  })
})
