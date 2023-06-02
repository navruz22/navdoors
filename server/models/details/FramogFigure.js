const { Schema, model, Joi } = require("../../packages");

const framogfigure = new Schema(
  {
    name: {type: String, required: true},
    price: {type: Number, required: true},
    date: {type: Date, default: Date.now()},
    isArchive: { type: Boolean, default: false },
  }
);

function validateFramogFigure(framogfigure) {
  const schema = Joi.object({
    name: Joi.number().required(),
    price: Joi.number().required(),
  });

  return schema.validate(framogfigure);
}


module.exports.validateFramogFigure = validateFramogFigure;
module.exports.FramogFigure = model("FramogFigure", framogfigure);