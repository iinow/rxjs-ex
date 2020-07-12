import { describe } from 'mocha'
import { assert } from 'chai'

describe('피보나치 수열', () => {
  it('테스트1', () => {
    function* fibonacci() {
      let first = 1, second = 1
      for(;;) {
        let sum = first + second
        yield sum
        first = second
        second = sum
      }
    }

    const iter = fibonacci()
    assert.equal(iter.next().value, 2)
    assert.equal(iter.next().value, 3)
    assert.equal(iter.next().value, 5)
  })
})
