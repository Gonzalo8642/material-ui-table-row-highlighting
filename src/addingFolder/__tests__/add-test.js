import { add } from "../add";

it("adds numbers", () => {
  expect(add(1, 2)).toEqual(3);
  expect(add(2, 2)).toEqual(4);
});
