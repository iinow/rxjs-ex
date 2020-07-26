import { describe } from 'mocha'
import { assert } from 'chai'
import { Observable, of, range } from 'rxjs'
import { reduce } from 'rxjs/operators'

describe('observer', () => {
  it('next', () => {
    new Observable(observer => {
      observer.next(111)
      observer.next(222)
      observer.next(333)
      observer.complete()
    }).subscribe(console.log)
  })

  it('loop', () => {
    function* loop() {
      let number: number = 0
      for (;;) {
        number++
        yield number
      }
    }

    let iter = loop()
    console.log(iter.next().value)
    console.log(iter.next().value)
    console.log(iter.next().value)
    console.log(iter.next().value)
  })
})
