import { expect , test} from 'vitest';

import {sum} from './sum';

test('should add two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });