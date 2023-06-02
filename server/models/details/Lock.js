const { Schema, model, Joi } = require("../../packages");

const lock = new Schema(
  {
    name: {type: String, required: true},
    price: {type: Number, required: true},
    date: {type: Date, default: Date.now()},
    isArchive: { type: Boolean, default: false },
  }
);

function validateLock(lock) {
  const schema = Joi.object({
    name: Joi.number().required(),
    price: Joi.number().required(),
  });

  return schema.validate(lock);
}


module.exports.validateLock = validateLock;
module.exports.Lock = model("Lock", lock);