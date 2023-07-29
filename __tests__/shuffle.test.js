const shuffle = require("../src/shuffle");

testArr = [1, 2, 3, 4, 5, 6];

describe("shuffle should...", () => {
  test("shuffle should return an array", () => {
    expect(Array.isArray(shuffle(testArr))).toBeTruthy();
  });
  test("returns an array of same length", () => {
    expect(shuffle(testArr).length).toBe(testArr.length);
  });
  test("array returns same elements.", () => {
    expect(shuffle(testArr)).toEqual(expect.arrayContaining(testArr));
  });
});
