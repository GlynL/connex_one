import { expect } from "chai";
import { getEpochTime } from "../../services/time";

describe("time tests", function () {
  it("should return the correct epoch time", function () {
    const epochTime = Math.floor(Date.now() / 1000);
    const time = getEpochTime();
    expect(epochTime).to.equal(time);
  });
});
