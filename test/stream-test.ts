import { describe } from 'mocha'
import { assert } from 'chai'
import { from, fromEvent, observable, Observable } from 'rxjs'
import { fromPromise } from 'rxjs/internal-compatibility'
import { map } from 'rxjs/operators'

describe('stream test', () => {
  it('stream execute', () => {
    assert.equal(1, 1)
  })
})

describe('observable', () => {
  it('promise', () => {
    let promise = Promise.resolve('hello')
    from(promise).subscribe(data => {
      assert.equal(data, 'hello')
    })
  })

  it('promise2', () => {
    from(Promise.resolve('haha'))
      .pipe(map(value => `${value} world`))
      .subscribe(res => {
        console.log(res)
      })
  })

  it('event', () => {
    // fromEvent()
  })
})
