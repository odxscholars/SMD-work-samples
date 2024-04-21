const mongoose = require("mongoose")

const Schema = mongoose.Schema


const jobHiringSchema = new Schema({
    title: {
        type: String,
        require: true,
        unique: true // prevent redundant job posting?
    },
    description: {
        type: String,
        require: true
    }, 
    qualification:{
        type: [String], //probably not String
        require: true
    },
    acceptingEndDate: {
        type: Date
    },
    applicants: [{
        applicantID: {
            type: ObjectId,
            require: true
        },
        appliedDate: {
            type: Date,
            require: true
        },
        filter: {
            type: String,
            enum: ['pending', 'active', 'inactive'],
            dafault: 'pending',
            require: true
        }
    }]
})

module.exports = mongoose.model("JobHiring", jobHiringSchema, "JobHiring")