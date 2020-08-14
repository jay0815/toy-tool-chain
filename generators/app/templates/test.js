import {
  expect
} from 'chai';
import {
  add
} from "../demo/src/add.js";


describe("test add", () => {
  it("1 add 2", () => {
    expect(add(1, 2)).to.be.equals(3);
  });
});
