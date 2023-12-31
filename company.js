const mongoose = require("mongoose")

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  companyEmployees: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
  headquarter: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    default: "",
  },
  region: {
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
  numberofsubsidiaries: {
    type: Number,
    required: false,
  },
  industry: {
    type: String,
    required: false,
  },
  softDelete: {
    type: Boolean,
    default: false,
  },
  noOfEmployees: {
    type: Number,
    required: false,
  },
})

const CompanyModels = mongoose.model("Company1", CompanySchema)
module.exports = CompanyModels
