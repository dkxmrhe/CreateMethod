import {Mathe} from './mathe';
import {describe, expect, test} from '@jest/globals';

test('[1,2,3,4] => 1', () => {
    expect(Mathe.min([1,2,3,4])).toBe(1);
});