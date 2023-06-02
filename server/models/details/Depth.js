const { Schema, model, Joi } = require("../../packages");

const depth = new Schema(
  {
    name: {type: String, required: true},
    price: {type: Number, required: true},
    date: {type: Date, default: Date.now()},
    isArchive: { type: Boolean, default: false },
  }
);

function validateDepth(depth) {
  const schema = Joi.object({
    name: Joi.number().required(),
    price: Joi.number().required(),
  });

  return schema.validate(depth);
}


module.exports.validateDepth = validateDepth;
module.exports.Depth = model("Depth", depth);