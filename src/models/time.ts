import Ajv from "ajv";
const ajv = new Ajv();

const timeSchema = {
  type: "object",
  properties: {
    epoch: {
      description:
        "The current server time, in epoch seconds, at time of processing the request.",
      type: "number",
    },
  },
  required: ["epoch"],
  additionalProperties: false,
};

export const validateTime = ajv.compile(timeSchema);
