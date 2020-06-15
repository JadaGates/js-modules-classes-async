import { Person } from "../practice2/Person";
import { Student } from "../practice2/Student";

const kevin = new Person("Kevin");
const winnie = new Student("Winnie", "class1");

test("properties on kevin and winnie expected", () => {
  expect(kevin.name).toBe("Kevin");
  expect(winnie.name).toBe("Winnie");
  expect(winnie.className).toBe("class1");
});

test("functions on kevin and winnie expected", () => {
  global.console.log = jest.fn();
  kevin.move();
  expect(global.console.log).toBeCalledWith("Kevin is moving");
  winnie.study();
  expect(global.console.log).toBeCalledWith("Winnie is moving");
  expect(global.console.log).toBeCalledWith("Winnie is studying in class1");
});

test("this is consistent for study function", () => {
  global.console.log = jest.fn();
  const { study } = winnie;
  study();
  expect(global.console.log).toBeCalledWith("Winnie is studying in class1");
});
