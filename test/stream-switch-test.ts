import { describe } from 'mocha'
import { assert } from 'chai'
import {from, fromEvent, interval, observable, Observable, of, range} from 'rxjs'
import { fromIterable, fromPromise } from 'rxjs/internal-compatibility'
import {map, mergeAll, pluck, reduce, switchAll, switchMapTo, take, tap} from 'rxjs/operators'

describe('switch', function () {
  it('ex1', function () {
    of(1)
      .pipe(
        map(v => range(1, 3)),
        switchAll()
      )
      .subscribe(console.log)
  })
})
