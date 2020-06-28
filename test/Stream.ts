import { describe } from 'mocha'
import { assert } from 'chai'
import { from } from "rxjs";

describe('stream test', () => {
  it('stream execute', () => {
    assert.equal(1, 1)
  })
})

describe('observable', () => {
  it('promise', () => {
    let promise = Promise.resolve('hello')
    from(promise)
      .subscribe(data => {
        assert.equal(data, 'hello')
      })
  })
})