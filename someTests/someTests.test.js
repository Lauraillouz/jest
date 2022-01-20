test("2 and 2 make 4", () => {
  expect(2 + 2).toBe(4);
});

// toBe uses Object.is to test exact equality. To verify the valu of an object, rather use toEqual because it checks every field of an object or an array
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// also possible to test the contrary of a comparator:
test("the addition of positive numbers does not equal zero", () => {
  for (let a = 1; a > 10; a++) {
    for (let b = 1; b > 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

// Different ways of doing things
test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

// With numbers
test("compare results for 2 + 2", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
});

// With strings and regex
test("this string doesn't have a q", () => {
  expect("team").not.toMatch(/q/);
});
test("this word should include 'bro'", () => {
  expect("bromnce").toMatch(/bro/);
});

// With Arrays
const list = [
  "something",
  "another thing",
  "one more",
  "and this as well",
  "extra stuff",
  "other stuff",
];

test("this list includes other stuff", () => {
  expect(list).toContain("other stuff");
  expect(new Set(list)).toContain("other stuff");
});

// With Errors
const thisError = () => {
  throw new Error("This is an bad error, mate");
};

test("you've been bad and got an error", () => {
  expect(() => thisError()).toThrow();
  expect(() => thisError()).toThrow(Error);
  // useable with a regex too
  expect(() => thisError()).toThrow(/error/);
});
