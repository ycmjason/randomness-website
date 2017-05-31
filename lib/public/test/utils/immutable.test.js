import assert from 'assert';
import { deepCopy } from '../../src/utils/immutable';

function deepEqualButNotSameObject(actual, expected){
  if(typeof actual === typeof expected && typeof actual !== "object"){
    return assert.equal(actual, expected);
  }
  assert.notEqual(actual, expected);
  Object.keys(actual).forEach(k => {
    deepEqualButNotSameObject(actual[k], expected[k])
  });
}

describe('utils/immutable', function(){
  it('# deepCopy', function(){
    let a = [{x: {y: [3333]}}, [1,2,3,4,5]];
    let copy = deepCopy(a);
    assert.deepEqual(copy, a);
    deepEqualButNotSameObject(copy, a);
  });
});
