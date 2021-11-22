import { describe, expect } from '@jest/globals'
import { todo } from '../src'

describe('TODO', () => {
  it('should test todo', function () {
    expect(todo(true)).toBe(true)
  })
})
