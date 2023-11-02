// const mongoose = require('./mongoose');
const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  administratorSurveys: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Survey",
    },
  ],
  administratorSurveyInvitations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SurveyInvitation",
    },
  ],
  email: {
    type: String,
    required: false,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  updateDate: {
    type: Date,
    default: Date.now,
  },

  firstName: String,
  lastName: String,
  password: String,
  super: Boolean,
  description: String,
  softdelete: Boolean,
})

const AdminModel = mongoose.model("Admin", AdminSchema)

module.exports = AdminModel
