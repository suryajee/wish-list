const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishSchema = Schema({
  wish: String,
});

mongoose.model("wishes", wishSchema);
