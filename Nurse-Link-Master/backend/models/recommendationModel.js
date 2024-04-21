const mongoose = require("mongoose")
const Schema = mongoose.Schema

const recommendationSchema = new Schema ({
    authorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    receiverID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Recommendations", recommendationSchema, "Recommendations")