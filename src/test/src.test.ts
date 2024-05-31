import { test, expect } from 'vitest'

function sum(a:any, b:any) {
  return a + b
}

test('sum', () => {
  expect(sum(1 , 2)).toBe(3)
  expect(sum(2 , 1)).toBe(3)
})
