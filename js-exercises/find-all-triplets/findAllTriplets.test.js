import { findAllTriplets } from './findAllTriplets';

describe('find all triplets', () => {
  test('should throws error on invalid parameters', () => {
    expect(() => findAllTriplets()).toThrow();
    expect(() => findAllTriplets([1, 2, 3])).toThrow();
    expect(() => findAllTriplets({}, 10)).toThrow();
    expect(() => findAllTriplets([1, 2, 'Hello World'], 20)).toThrow();
    expect(() => findAllTriplets([1, 2, 3, NaN], 3)).toThrow();
    expect(() => findAllTriplets([1, 2, 3, 4], 'hello world')).toThrow();
  });

  test('should return all triplets with sum = -2', () => {
    const arr = [0, -1, 2, -3, 1];
    const sum = -2;
    const expectedResult = [
      [0, 1, -3],
      [-1, 2, -3],
    ];
    const result = findAllTriplets(arr, sum);
    expect(result.length).toBe(2);
    expect(result).toEqual(
      expect.arrayContaining([expect.arrayContaining(expectedResult[0])])
    );
    expect(result).toEqual(
      expect.arrayContaining([expect.arrayContaining(expectedResult[1])])
    );
  });
  test('should return all triplets with sum = 0', () => {
    const arr = [1, -2, 1, 0, 5];
    const sum = 0;
    const expectedResult = [[1, 1, -2]];
    const result = findAllTriplets(arr, sum);
    console.log("lllllllllll", result)
    expect(result.length).toBe(1);
    expect(result).toEqual(
      expect.arrayContaining([expect.arrayContaining(expectedResult[0])])
    );
  });
});
