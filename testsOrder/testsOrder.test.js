beforeAll(() => console.log("beforAll #1")); // 1
afterAll(() => console.log("afterAll #1")); // 10
beforeEach(() => console.log("beforeEach #1")); // 2
afterEach(() => console.log("afterEach #1")); // 4
test("test #1 (not nested)", () => console.log("test #1")); // 3
describe("Scoped / nested block", () => {
  beforeAll(() => console.log("beforAll #2")); // 5
  afterAll(() => console.log("afterAll #2")); // 9
  beforeEach(() => console.log("beforeEach #2")); // 6
  afterEach(() => console.log("afterEach #2")); // 8
  test("test #2 (nested)", () => console.log("test #2")); // 7
});

// Order when usign nested describe methods: note that tests are always ran at the very end
describe("wrapper", () => {
  console.log("before describe warpper #1"); // 1

  describe("wrapper's child #1", () => {
    console.log("inside describe wrapper's child #1"); // 2
    test("test #1", () => {
      console.log("test for describe wrapper's child #1"); // 6
      expect(true).toEqual(true);
    });
  });

  console.log("describe wrapper #2"); // 3

  test("test #2", () => {
    console.log("test for wrapper"); // 7
    expect(true).toBe(true);
  });

  describe("wrapper's child #2", () => {
    console.log("inside describe wrapper's child #2"); // 4
    test("test #2", () => {
      console.log("test for describe wrapper's child #2"); // 8
      expect(false).toEqual(false);
    });
  });

  console.log("after describe wrapper #2"); // 5
});
