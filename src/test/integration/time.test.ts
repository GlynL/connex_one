import request from "supertest";
import { expect } from "chai";
import app from "../../app";
import { getEpochTime } from "../../services/time";

describe('GET "/time"', function () {
  it(`isn't authorised`, async function () {
    const res = await request(app).get("/metrics");
    expect(res.status).to.equal(403);
  });
  it("returns the correct epoch time", async function () {
    const res = await request(app)
      .get("/time")
      .set("Authorization", process.env.AUTH_TOKEN || "");
    expect(res.status).to.equal(200);
    const epochTime = getEpochTime();
    expect(res.body.epoch).to.equal(epochTime);
  });
});
