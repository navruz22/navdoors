const { Schema, model, Joi } = require("../../packages");

const ornament_figure = new Schema(
  {
    name: {type: String, required: true},
    price: {type: Number, required: true},
    date: {type: Date, default: Date.now()},
    isArchive: { type: Boolean, default: false },
  }
);

function validateOrnamentFigure(ornament_figure) {
  const schema = Joi.object({
    name: Joi.number().required(),
    price: Joi.number().required(),
  });

  return schema.validate(ornament_figure);
}


module.exports.validateOrnamentFigure = validateOrnamentFigure;
module.exports.OrnamentFigure = model("OrnamentFigure", ornament_figure);