const mongoose = require("mongoose")

const Schema = mongoose.Schema

const nurseSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: "User",
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
    },
    about: {
        type: String,
    },
    birthdate: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Non-Binary', 'Prefer not to Say']
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
    },
    bannerPicture: {
        type: String,
    },
    youtube: {
        type: String,
    },
    technicalSkill: [
        {
            type: String
        }
    ],
    contact: {
        email: {
            type: String,
        },
        phoneNumber: {
            type: String,
        },
    },
    socials: {
        facebook: {
            type: String,
        },
        twitter: {
            type: String,
        },
        instagram: {
            type: String,
        },
    },
    preferredLoc: [
        {
            country: {
                type: String,
            },
            city: {
                type: String,
            }
        }
    ],
    credentials: {
        education: [
            {
                institutionName: {
                    type: String,
                    required: true
                },
                degree: {
                    type: String,
                },
                fieldStudy: {
                    type: String,
                },
                startDate: {
                    type: Date,
                },
                endDate: {
                    type: Date,
                },
                isCurrent: {
                    type: Boolean,
                }
            },
        ],
        experience: [
            {
                institutionName: {
                    type: String,
                },
                description: {
                    type: String,
                },
                role: {
                    type: String,
                },
                startDate: {
                    type: Date,
                },
                endDate: {
                    type: Date,
                },
                employmentType: {
                    type: String,
                    enum: ['Full-time', 'Part-time', 'Self-employed', 'Freelance', 'Contract', 'Internship', 'Apprenticeship', 'Seasonal'],
                },
                isCurrent: {
                    type: Boolean,
                }
            },
        ],
        volunteering: [
            {
                institutionName: {
                    type: String,
                },
                role: {
                    type: String,
                },
                description: {
                    type: String,
                },
                startDate: {
                    type: Date,
                },
                endDate: {
                    type: Date,
                },
                isCurrent: {
                    type: Boolean,
                },
            }
        ],
        document: [
            {
                type: {
                    type: String,
                    enum: ['license', 'certification', 'award']
                },
                name: {
                    type: String,
                },
                description: {
                    type: String,
                },
                institutionName: {
                    type: String,
                },
                issuanceDate: {
                    type: Date,
                },
                status: {
                    type: String,
                    enum: ['verified', 'unverified', 'pending'],
                    default: 'pending'
                },
                link: {
                    type: String,
                }            
            }
        ],
    },
    connections: {
        type: [mongoose.Schema.Types.ObjectId]
    },
    connectionSent: {
        type: [mongoose.Schema.Types.ObjectId]
    },
    connectionReceived: {
        type: [mongoose.Schema.Types.ObjectId]
    },
    notification: [{
        type: {
            type: String,
            enum: ['connectionRequest', 'recommendation', 'hiring', 'account'],
            default: 'account',
            required: true
        },
        status: {
            type: String,
            enum: ['read', 'unread',],
            default: 'unread',
            required: true
        },
        userInvolved: {
            type: mongoose.Schema.Types.ObjectId
        },
        date: {
            type: Date,
            required: true
        }
    }],
    recommendations: {
        given: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Recommendations"
        }],
        received: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Recommendations"
        }]
    }
}, {timestamps: true})

module.exports = mongoose.model("Nurse", nurseSchema, "Nurse")
