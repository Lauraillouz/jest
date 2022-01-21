const myMock = jest.fn();
console.log(myMock()); // will return undefined

// This allow us to simulate some returned values
myMock
  .mockReturnValueOnce(10)
  .mockReturnValueOnce("x")
  .mockReturnValueOnce(true);
console.log(myMock(), myMock(), myMock(), myMock()); // 4th myMock() returns undefined because we haven't assigned it a value, which seems logical (however in doc it says it should return true??)

//
const filterTestFn = jest.fn();

filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

const result = [11, 12].filter((num) => filterTestFn(num));

test("should return [11]", () => {
  expect(result).toEqual([11]); // Can't use toBe because we're checking an array and not just a number
});

test("should return 11", () => {
  expect(filterTestFn.mock.calls[0][0]).toBe(11); // the first argument of the first call
});

test("should return 12", () => {
  expect(filterTestFn.mock.calls[1][0]).toBe(12); // the second argument of the first call
});
