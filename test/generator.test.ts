import createCursor, { ICursor } from '@icursor/core'
import { describe, expect, it } from 'vitest'

describe('entry test', () => {
  const cursor1 = createCursor('.btn')
  const cursor2 = createCursor(['.btn', '.nav'])
  const cursor3 = createCursor({ '.btn': 'btn' })

  it('should be a cursor obj', () => {
    expect(cursor1).toBeInstanceOf(ICursor)
    expect(cursor2).toBeInstanceOf(ICursor)
    expect(cursor3).toBeInstanceOf(ICursor)
  })

  it('should be same', () => {
    expect(cursor1).toEqual(cursor2)
    expect(cursor1).toEqual(cursor3)
  })

  it('should have two div with class icursor', () => {
    const body = document.querySelector('body')
    const children = Array.from(body.children).filter(child => child.classList.contains('icursor'))

    expect(children.length).toBe(2)
  })
})
