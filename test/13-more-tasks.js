import assert from 'assert';

import { distinctLettersString, lowerLetters } from '../task/13-more-tasks';

it.optional = require('../extensions/it-optional');

describe('13-more-tasks', () => {
  it.optional('distinctLettersString should return a new sorted string with distinct letters', () => {
    assert.equal('abcdefklmopqwxy',
      distinctLettersString('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));
    assert.equal('abcdefghilnoprstu',
      distinctLettersString('loopingisfunbutdangerous', 'lessdangerousthancoding'));
  });

  it.optional('lowerLetters should return an object of every distinct letters', () => {
    assert.deepEqual({ e: 2, n: 2, r: 1, t: 2 }, lowerLetters('Internet 42'));
    assert.deepEqual({ a: 3, d: 1, f: 2, p: 1, x: 1 }, lowerLetters('$0 af0HOE@ /xfda2 24pa'));
  });
});