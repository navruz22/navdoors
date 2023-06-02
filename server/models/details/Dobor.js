const { Schema, model, Joi } = require("../../packages");

const dobor = new Schema(
  {
    name: {type: String, required: true},
    price: {type: Number, required: true},
    date: {type: Date, default: Date.now()},
    isArchive: { type: Boolean, default: false },
  }
);

function validateDobor(dobor) {
  const schema = Joi.object({
    name: Joi.number().required(),
    price: Joi.number().required(),
  });

  return schema.validate(dobor);
}


module.exports.validateDobor = validateDobor;
module.exports.Dobor = model("Dobor", dobor);