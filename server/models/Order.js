const { Schema, model, Joi } = require("../packages");

const order = new Schema(
  {
    door_type: { type: Schema.Types.ObjectId },
    client:  { type: Schema.Types.ObjectId },
    doors: [{type: Schema.Types.ObjectId}],
    totalprice: {type: Number, required: true},
    date: {type: Date, default: Date.now()},
    isArchive: { type: Boolean, default: false },
  }
);

function validateOrder(order) {
  const schema = Joi.object({
    door_type: Joi.string().required(),
    client: Joi.string().required(),
    deal: Joi.string().required(),
    type: Joi.string().required(),
  });

  return schema.validate(order);
}


module.exports.validateOrder = validateOrder;
module.exports.Order = model("Order", order);