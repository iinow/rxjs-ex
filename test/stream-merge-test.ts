import { describe } from 'mocha'
import { assert } from 'chai'
import {from, fromEvent, interval, observable, Observable, of} from 'rxjs'
import { fromIterable, fromPromise } from 'rxjs/internal-compatibility'
import {map, mergeAll, pluck, reduce, take, tap} from 'rxjs/operators'

describe('인터리빙 테스트', function() {
  it('merge', function() {
    const p1 = (val: number) => new Promise(resolve => setTimeout(() => resolve(`Result: ${val}`), 2000));

    of(1, 2, 3, 4)
      .pipe(
        map(v => p1(v)),
        mergeAll()
      )
      .subscribe(console.log)


  })

  it('should interval merge', function () {
    const source1 = interval(1000)
      .pipe(
        map(x => `Source 1 ${x}`),
        take(3)
      )
    const source2 = interval(1000)
      .pipe(
        map(x => `Source 2 ${x}`),
        take(3)
      )

    of(source1, source2)
      .pipe(
        mergeAll(),
        tap(v => console.log(`로그 확인용 ${v}`))
      )
      .subscribe(console.log)
  })
})
