const { Schema, model, Joi } = require("../packages");

const door = new Schema(
  {
    firstname: { type: String, required: true, trim: true, capitalize: true },
    lastname: { type: String, required: true, trim: true, capitalize: true },
    username: { type: String, required: true },
    type: { type: String, required: true },
    password: { type: String, required: true },
    date: {type: Date, default: Date.now()},
    isArchive: { type: Boolean, default: false },
  }
);

function validateDoor(door) {
  const schema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    password: Joi.string().required(),
    username: Joi.string().required(),
    type: Joi.string().required(),
  });

  return schema.validate(door);
}


module.exports.validateDoor = validateDoor;
module.exports.Door = model("Door", door);