import { describe, expect, it } from 'vitest'

describe('should', () => {
  it('regexp should world', () => {
    const raw = `origin https://github.com/LU-JIEJIE/xxx.git (fetch)
    origin https://github.com/LU-JIEJIE/xxx (push)
    `
    const match = raw.match(/(https:\/\/github\.com\/[^\s]*)/)
    expect(match).toMatchInlineSnapshot(`
      [
        "https://github.com/LU-JIEJIE/xxx.git",
        "https://github.com/LU-JIEJIE/xxx.git",
      ]
    `)
  })
})
