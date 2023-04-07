import { expect } from "chai";
import { toDateString, toClockString } from "../src/util/StringUtil";

describe("toDateString", () => {
  it("converts a unix second timestamp to a date string", () => {
    // eslint-disable-next-line jest/valid-expect
    expect(toDateString(1678937873)).to.equal("Mar 15, 2023");
  });
});

describe("toClockString", () => {
  it("converts two unix second timestamp to a clock string", () => {
    // eslint-disable-next-line jest/valid-expect
    expect(toClockString(1678852861, 1678937973)).to.equal("00:01:01 - 23:39:33");
  });
});
