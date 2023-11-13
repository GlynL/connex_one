import request from "supertest";
import { expect } from "chai";
import app from "../../app";

describe('GET "/metrics"', function () {
  it(`isn't authorised`, async function () {
    const res = await request(app).get("/time");
    expect(res.status).to.equal(403);
  });
  it(`returns metrics`, async function () {
    const res = await request(app)
      .get("/metrics")
      .set("Authorization", process.env.AUTH_TOKEN || "");
    expect(res.status).to.equal(200);
  });
});
