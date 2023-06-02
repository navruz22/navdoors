const { Schema, model, Joi } = require("../../packages");

const jamb = new Schema(
  {
    name: {type: String, required: true},
    price: {type: Number, required: true},
    date: {type: Date, default: Date.now()},
    isArchive: { type: Boolean, default: false },
  }
);

function validateJamb(jamb) {
  const schema = Joi.object({
    name: Joi.number().required(),
    price: Joi.number().required(),
  });

  return schema.validate(jamb);
}


module.exports.validateJamb = validateJamb;
module.exports.Jamb = model("Jamb", jamb);