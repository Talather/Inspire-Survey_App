const mongoose = require("mongoose")

const SurveySchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },
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
    required: true,
  },
  softDelete: {
    type: Boolean,
    default: false,
  },
  surveyQuestions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
  surveyCompletedSurveys: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "completedSurveys",
    },
  ],
  surveyInvitations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SurveyInvitation",
    },
  ],
  updateDate: {
    type: Date,
    default: Date.now,
  },
})

surveyModel = mongoose.model("Survey", SurveySchema)
module.exports = surveyModel
