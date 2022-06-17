const { add } = require("./function");
let myFunctions = require("./function");

test("Return Two test", () => {
  expect(myFunctions.returnTwo()).toBe(2);
});
describe("nameString", () => {
  test("should be equal to name", () => {
    expect(myFunctions.greeting("James")).toEqual("Hello, James");
  });
  test("nameString", () => {
    expect(myFunctions.greeting("Jill")).toEqual("Hello, Jill");
  });
});
describe("sum", () => {
  test("should be equal to num1 plus num2", () => {
    expect(myFunctions.add(1, 2)).toEqual(3);
  });
  test("should be equal to num1 plus num2 again", () => {
    expect(myFunctions.add(5, 9)).toEqual(14);
  });
});
