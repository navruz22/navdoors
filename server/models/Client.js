const { Schema, model, Joi } = require("../packages");

const client = new Schema(
  {
    fullname: { type: String, required: true, trim: true, capitalize: true },
    phone: { type: String, required: true },
    date: {type: Date, default: Date.now()},
    isArchive: { type: Boolean, default: false },
  }
);

function validateClient(client) {
  const schema = Joi.object({
    fullname: Joi.string().required(),
    phone: Joi.string().required(),
  });

  return schema.validate(client);
}


module.exports.validateClient = validateClient;
module.exports.Client = model("Client", client);