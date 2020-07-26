import { describe } from 'mocha'
import { assert } from 'chai'
import { from, fromEvent, observable, Observable, of } from 'rxjs'
import { fromIterable, fromPromise } from 'rxjs/internal-compatibility'
import { map, mergeAll, pluck, reduce } from 'rxjs/operators'

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
})
