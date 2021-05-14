import { getTotalTime } from './liftKeypad.js';

describe('getTotalTime', () => {
  it('get Total time to enter the passcode', () => {
    expect(getTotalTime('423692', '923857614')).toEqual(8);
    expect(getTotalTime('5111', '752961348')).toEqual(1);
    expect(getTotalTime('91566165', '639485712')).toEqual(11);
  });
  // write test case for error and edge cases
  test('should throws error on invalid parameters', () => {
    expect(() => getTotalTime()).toThrow();
    expect(() => getTotalTime('123123', 'hvghvjhbhbb123')).toThrow();
    expect(() => getTotalTime('34562', '123123123')).toThrow();
    expect(() => getTotalTime('123456', '1234567890')).toThrow();
    expect(() => getTotalTime('qwerr', '987654321')).toThrow();
    expect(() => getTotalTime('hello world')).toThrow();
  });
});
