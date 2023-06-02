const { Schema, model, Joi } = require("../../packages");

const layer = new Schema(
  {
    name: {type: String, required: true},
    price: {type: Number, required: true},
    date: {type: Date, default: Date.now()},
    isArchive: { type: Boolean, default: false },
  }
);

function validateLayer(layer) {
  const schema = Joi.object({
    name: Joi.number().required(),
    price: Joi.number().required(),
  });

  return schema.validate(layer);
}


module.exports.validateLayer = validateLayer;
module.exports.Layer = model("Layer", layer);