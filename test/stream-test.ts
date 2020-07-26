import { describe } from 'mocha'
import { assert } from 'chai'
import { from, fromEvent, observable, Observable, of } from 'rxjs'
import { fromIterable, fromPromise } from 'rxjs/internal-compatibility'
import { map, pluck, reduce } from 'rxjs/operators'

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

  it('should pluck', function() {
    interface Data {
      date: string
      amount: number
    }
    const datas: Data[] = [
      {
        date: '2019-07-01',
        amount: -320
      },
      {
        date: '2019-07-13',
        amount: 1000
      },
      {
        date: '2019-07-22',
        amount: 45
      }
    ]
    fromIterable(datas)
      .pipe(
        pluck('amount'),
        reduce((a, b) => a + b)
      )
      .subscribe(console.log)
    // of(datas)
  })
})
