const { Schema, model, Joi } = require("../../packages");

const doortype = new Schema(
  {
    name: {type: String, required: true},
    price: {type: Number, required: true},
    dobor_price: {type: Number, required: true},
    jamb_price: {type: Number, required: true},
    date: {type: Date, default: Date.now()},
    isArchive: { type: Boolean, default: false },
  }
);

function validateDoorType(doortype) {
  const schema = Joi.object({
    name: Joi.number().required(),
    price: Joi.number().required(),
  });

  return schema.validate(doortype);
}


module.exports.validateDoorType = validateDoorType;
module.exports.DoorType = model("DoorType", doortype);