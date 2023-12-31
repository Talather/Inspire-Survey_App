const mongoose = require("mongoose")

const SubcategoryQuestionSchema = new mongoose.Schema({
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  creationDate: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  softdelete: {
    type: Boolean,
    default: false,
  },
  subcategoryQuestion: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
  updateDate: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model(
  "SubcategoryQuestion",
  SubcategoryQuestionSchema
)
