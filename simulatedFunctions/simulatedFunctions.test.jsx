function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockCallback = jest.fn((x) => 42 + x);
forEach([0, 1], mockCallback);

test("The simulated functions should be called twice", () => {
  expect(mockCallback.mock.calls.length).toBe(2);
});

test("The first argument of the first call should be 0", () => {
  expect(mockCallback.mock.calls[0][0]).toBe(0);
});

test("The first argument of the second call should be 1", () => {
  expect(mockCallback.mock.calls[1][0]).toBe(1);
});

test("The returned value of the first call should be 42", () => {
  expect(mockCallback.mock.results[0].value).toBe(42);
});
