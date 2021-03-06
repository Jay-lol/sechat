const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Message = new Schema({
  group: { type: Schema.Types.ObjectId, required: true, ref: "group" },
  user: { type: Schema.Types.ObjectId, required: true, ref: "user" },
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  type: { type: String, required: true } // "text" || "code"
});

module.exports = mongoose.model("message", Message);
