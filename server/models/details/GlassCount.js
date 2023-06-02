const { Schema, model, Joi } = require("../../packages");

const glasscount = new Schema(
  {
    name: {type: String, required: true},
    date: {type: Date, default: Date.now()},
    isArchive: { type: Boolean, default: false },
  }
);

function validateGlassCount(glasscount) {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  return schema.validate(glasscount);
}


module.exports.validateGlassCount = validateGlassCount;
module.exports.GlassCount = model("GlassCount", glasscount);