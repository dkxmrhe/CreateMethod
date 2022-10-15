import {Mathe} from './max';
import {describe, expect, test} from '@jest/globals';

test('[1,2,3,4] => 4', () => {
    expect(Mathe.max([1,2,3,4])).toBe(4);
});