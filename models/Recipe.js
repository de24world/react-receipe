const { FieldsOnCorrectTypeRule } = require("graphql");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  descrption: {
    type: String,
    required: FieldsOnCorrectTypeRule,
  },
  instructions: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  username: {
    type: String,
  },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
