const { Schema, model, Joi } = require("../../packages");

const framogtype = new Schema(
  {
    name: {type: String, required: true},
    price: {type: Number, required: true},
    date: {type: Date, default: Date.now()},
    isArchive: { type: Boolean, default: false },
  }
);

function validateFramogType(framogtype) {
  const schema = Joi.object({
    name: Joi.number().required(),
    price: Joi.number().required(),
  });

  return schema.validate(framogtype);
}


module.exports.validateFramogType = validateFramogType;
module.exports.FramogType = model("FramogType", framogtype);