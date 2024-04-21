const passport = require("passport")
const Nurse = require("../models/nurseModel")
const User = require("../models/userModel")
const cloudinary = require("../utils/cloudinary")
const fs = require("fs")
const Recommendations = require("../models/recommendationModel")

const computeNurseProgress = (nurse) => {
    const skills = [
        nurse.technicalSkill.length,
        nurse.credentials.education.length,
        nurse.credentials.experience.length,
        nurse.credentials.volunteering.length,
        nurse.credentials.document.length,
    ]
    const maxPercentage = skills.length + 1
    let score = 1
    skills.forEach((skill) => {
        if (skill >= 1) {
            score += 1
        }
    })
    return Math.floor((score / maxPercentage) * 100)
}

const getNurses = async (req, res) => {
    try {
        const nurses = await Nurse.find({})
        res.status(200).json(nurses)
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: "Something went wrong" })
    }
}

const getNurse = async (req, res) => {
    const { userId } = req.params
    try {
        const nurse = await Nurse.findOne({ userId })
        const user = await User.findById(userId)

        if (!nurse)
            return res
                .status(404)
                .json({ message: "Could not find the nurse!" })

        const score = computeNurseProgress(nurse)
        res.status(200).json({
            ...nurse._doc,
            username: user.username,
            email: user.email,
            progress: score,
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Something went wrong!" })
    }
}

const editNurse = async (req, res) => {
    const userId = req.user._id
    try {
        const nurse = await Nurse.findOneAndUpdate(
            { userId },
            {
                ...req.body,
            }
        )
        if (!nurse)
            return res
                .status(404)
                .json({ message: "Could not find the nurse!" })

        return res.status(200).json({ message: "Successfully edited!" })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Something went wrong!" })
    }
}

const editNurseProfilePicture = async (req, res) => {
    try {

        const files = req.files.img
        const userId = req.user._id
        if (userId === undefined) {
            return res.status(404).json({ message: "You are not logged in..." })
        }
        const result = await cloudinary.uploader.upload(files.tempFilePath, {
            public_id: Date.now(),
            folder: "nurse-link-images",
            width: 200,
            height: 200,
            crop: "fill",
            withcredentials: false,
            gravity: "face"
        })

        fs.unlink(files.tempFilePath, (err) => {
            if (err) {
                console.error("Error deleting the temporary file:", err)
            } else {
                console.log("Temporary file deleted.")
            }
        })

        const nurse = await Nurse.findOneAndUpdate(
            { userId: userId },
            {
                profilePicture: result.secure_url,
            }
        )

        if (!nurse) {
            return res.status(404).json({ message: "this user does not exist" })
        }
        res.status(200).json({
            message: "The profile picture has been successfully changed!",
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Server Error!" })
    }
}

const editNurseBanner = async (req, res) => {
    try {

        const files = req.files.img
        const userId = req.user._id
        if (userId === undefined) {
            return res.status(404).json({ message: "You are not logged in..." })
        }
        const result = await cloudinary.uploader.upload(files.tempFilePath, {
            public_id: Date.now(),
            folder: "nurse-link-images",
            width: 1920,
            height: 1080,
            crop: "fill",
            withcredentials: false,
        })

        fs.unlink(files.tempFilePath, (err) => {
            if (err) {
                console.error("Error deleting the temporary file:", err)
            } else {
                console.log("Temporary file deleted.")
            }
        })

        const nurse = await Nurse.findOneAndUpdate(
            { userId: userId },
            {
                bannerPicture: result.secure_url,
            }
        )

        if (!nurse) {
            return res.status(404).json({ message: "this user does not exist" })
        }
        res.status(200).json({
            message: "The profile picture has been successfully changed!",
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Server Error!" })
    }
}

const deleteNurse = async (req, res) => {
    const { userId } = req.params
    try {
        const nurse = await Nurse.findOneAndDelete({ userId })
        const user = await User.findOneAndDelete({ _id: userId })
        if (!nurse)
            return res.status(404).json({ message: "Could not find nurse!" })

        if (!user)
            return res.status(404).json({ message: "Could not find user!" })

        return res
            .status(200)
            .json({ message: "Nurse account has been deleted!" })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Something went wrong!" })
    }
}

const addDocument = async (req, res) => {
    // console.log("log")
    // console.log("files")
    // console.log(req.files)
    // console.log("body")
    // console.log( req.body)
    // console.log("user")
    // console.log(req.user)
    // console.log("params")
    // console.log(req.params)
    // console.log("end of log")
    console.log("you are currently in add document")
    const documentFile = req.files.document
    const documentName = req.body.documentName
    const documentType = req.body.documentType
    const documentIssuer = req.body.issuer
    const documentIssueDate = req.body.issueDate
    const userId = req.user._id
    console.log("logging all the variables")
    console.log(documentFile, documentName, documentType, documentIssuer, documentIssueDate, userId)
    console.log("end of log")

    const result = await cloudinary.uploader.upload(documentFile.tempFilePath, {
        public_id: Date.now(),
        folder: "nurse-link-pdfs",
        withcredentials: false,
    })
    fs.unlink(documentFile.tempFilePath, (err) => {
        if (err) {
            console.error("Error deleting the temporary file:", err)
        } else {
            console.log("Temporary file deleted.")
        }
    })
    console.log("url:" + result.secure_url)
    if (result.secure_url){
        const nurse = await Nurse.findOne({ userId: userId })
        const type = documentType
        const name = documentName
        const description = ""
        const institutionName = documentIssuer
        const issuanceDate = documentIssueDate
        const status = "pending"
        const link = result.secure_url
        const nurseToUpdate = await Nurse.findOneAndUpdate(
            { userId: userId },
            {

                $push: {
                    "credentials.document": {
                        type,
                        name,
                        description,
                        institutionName,
                        issuanceDate,
                        status,
                        link

                    }
                }
            }
        )

    }else{
        console.log("error")
        console.log(result)
    }

} 

const getNurseConnections = async (req, res) => {
    const { userId } = req.params
    const search = req.query.search || ""
    let sort = req.query.sort || "recent"
    let sortBy = {}

    console.log(search)
    try {
        const connections = await Nurse.find(
                            // {$and: [
                                { userId: userId },
                            //     { lastName: {$regex: search, $options: "i"} }
                            // ]}, 
                            { 
                                connections: 1, _id: 0
                            })

        Nurse.aggregate([
            {$unwind: "$lastName"},
            {$project:{_id:0}},
            {$out:"test2"}
        ])
        if (!connections)
            return res.status(404).json({ message: "Could not find connections for user!" })

        return res.status(200).json(connections)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Something went wrong!" })
    }
}

const sendNurseConnection = async (req, res) => {
    const senderId = req.body.senderId
    const receiverId = req.body.receiverId

    helperCheckConnectionRequest(senderId, receiverId).then(async function(result){
        if (result) {
            return res.status(400).json({ message: "Connection request already sent!"})
        }

        try {
            const sendRequest = await Nurse.findOneAndUpdate(
                { userId: senderId },
                { $addToSet: { connectionSent: receiverId } }
            )
    
            const receiveRequest = await Nurse.findOneAndUpdate(
                { userId: receiverId },
                { $addToSet: { connectionReceived: senderId } }
            )
    
            if (sendRequest && receiveRequest)
                return res
                    .status(200)
                    .json({ message: "Connection request successfully sent!" })
    
            return res.status(400).json({ message: "Could not send connection request!"})
        } catch (e) {
            console.log(e)
            return res.status(500).json({ message: "Something went wrong!" })
        }
    }) 
}

const cancelNurseConnectionRequest = async (req, res) => {
    const senderId = req.body.senderId
    const receiverId = req.body.receiverId

    helperCheckConnectionRequest(senderId, receiverId).then(async function(result){
        if (result) {
            try {
                const cancelSenderRequest = await Nurse.findOneAndUpdate(
                    { userId: senderId },
                    { $pull: { connectionSent: receiverId } }
                )

                const cancelReceiverRequest = await Nurse.findOneAndUpdate(
                    { userId: receiverId },
                    { $pull: { connectionReceived: senderId } }   
                )

                if (cancelSenderRequest && cancelReceiverRequest)
                    return res
                        .status(200)
                        .json({ message: "Successfully cancelled connection request!" })
                
                return res.status(400).json({ message: "Could not cancel connection request!"})
            } catch (e) {
                console.log(e)
                return res.status(500).json({ message: "Something went wrong!" })
            }
        }
        return res.status(404).json({ message: "There is no connection request!"})
    }) 
}

const acceptNurseConnection = async (req, res) => {
    const accepterId = req.body.accepterId
    const senderId = req.body.senderId

    helperCheckConnectionRequest(senderId, accepterId).then(async function(result){
        if (result) {
            try {
                const acceptSenderRequest = await Nurse.findOneAndUpdate({ userId: accepterId },
                    {
                        $pull: { connectionReceived: senderId },
                        $push: { connections: senderId } 
                    }   
                )

                const acceptReceiverRequest = await Nurse.findOneAndUpdate({ userId: senderId },
                    {
                        $pull: { connectionSent: accepterId },
                        $push: { connections: accepterId }  
                    }
                )

                if (acceptSenderRequest && acceptReceiverRequest)
                    return res
                        .status(200)
                        .json({ message: "Successfully accepted connection request!" })

                return res.status(400).json({ message: "Could not accept connection request!"})
            } catch (e) {
                console.log(e)
                return res.status(500).json({ message: "Something went wrong!" })
            }
        }
        return res.status(404).json({ message: "There is no connection request!"})
    }) 
}

const rejectNurseConnection = async (req, res) => {
    const rejecterId = req.body.rejecterId 
    const rejecteeId = req.body.rejecteeId

    helperCheckConnectionRequest(rejecteeId, rejecterId).then(async function(result){
        console.log(result)
        if (result) {
            try {
                const rejectSenderRequest = await Nurse.findOneAndUpdate(
                    { userId: rejecterId },
                    { $pull: { connectionReceived: rejecteeId } }
                )
    
                const rejectReceiverRequest = await Nurse.findOneAndUpdate(

                    { userId: rejecteeId},
                    { $pull: { connectionSent: rejecterId } }
                )
    
                if (rejectSenderRequest && rejectReceiverRequest)
                    return res
                        .status(200)
                        .json({ message: "Successfully rejected connection request!" })

                return res.status(400).json({ message: "Could not reject connection request!"})
            } catch (e) {
                console.log(e)
                return res.status(500).json({ message: "Something went wrong!" })
            }
        }
        return res.status(404).json({ message: "There is no connection request!"})
    })
}

const getNurseConnectionRequest = async (req, res) => {
    const senderId = req.params.senderId
    const receiverId = req.params.receiverId

    try {
        const senderRequest = await Nurse.findOne(
            {$and: [
                { userId: senderId },
                { connectionSent: receiverId }
            ]}
        )

        const receiverRequest = await Nurse.findOne(
            {$and: [
                { userId: receiverId },
                { connectionReceived: senderId }
            ]}
        )

        if (senderRequest && receiverRequest)
            return res
                .status(200)
                .json({
                    message: "Connection request successfully found!", 
                    result: true 
                })

        return res.status(404).json({
                                        message: "Connection request not found!",
                                        result: false 
                                    })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Something went wrong!" })
    }
}

const getNurseConnection = async (req, res) => {
    const senderId = req.params.senderId
    const receiverId = req.params.receiverId

    try {
        const senderConnection = await Nurse.findOne(
            {$and: [
                { userId: senderId },
                { connections: receiverId }
            ]}
        )
        if(!senderConnection)
            return res.status(404).json({
                message: "Connection not found! for SENDER",
                result: false 
            })
        const receiverConnection = await Nurse.findOne(
            {$and: [
                { userId: receiverId },
                { connections: senderId }
            ]}
        )
        if(!receiverConnection)
            return res.status(404).json({
                message: "Connection not found!for RECEIVER",
                result: false 
            })
        
        
        return res
            .status(200)
            .json({
                message: "Connection successfully found!", 
                result: true 
            })

    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Something went wrong!" })
    }
}

const helperCheckConnectionRequest = async (senderId, receiverId) => {
    try {
        const sendRequest = await Nurse.findOne(
            {$and: [
                { userId: senderId },
                { connectionSent: receiverId }
            ]}
        )

        const receiveRequest = await Nurse.findOne(
            {$and: [
                { userId: receiverId },
                { connectionReceived: senderId }
            ]}
        )

        if (sendRequest && receiveRequest) 
            return true
        return false
        
    } catch (e) {
        console.log(e)
        return false
    }
}

const helperCheckConnection = async (senderId, receiverId) => {
    try {
        const senderConnection = await Nurse.findOne(
            {$and: [
                { userId: senderId },
                { connections: receiverId }
            ]}
        )

        const receiverConnection = await Nurse.findOne(
            {$and: [
                { userId: receiverId },
                { connections: senderId }
            ]}
        )

        if (senderConnection && receiverConnection)
            return true
        return false
        
    } catch (e) {
        console.log(e)
        return false
    }
}

const deleteNurseConnection = async (req, res) => {
    const senderId = req.body.senderId
    const receiverId = req.body.receiverId
    helperCheckConnection(senderId, receiverId).then(async function(result){
        console.log(result)
        if (result) {
            try {
                const acceptSenderRequest = await Nurse.findOneAndUpdate(
                    { userId: senderId },
                    { $pull: { connections: receiverId } }
                )

                const acceptReceiverRequest = await Nurse.findOneAndUpdate(
                    { userId: receiverId },
                    { $pull: { connections: senderId } }
                )
                console.log("something")
                console.log(acceptSenderRequest)
                console.log(acceptReceiverRequest)
                if (acceptSenderRequest && acceptReceiverRequest)
                    return res
                        .status(200)
                        .json({ message: "Successfully delete connection request!" })

                return res.status(400).json({ message: "Could not delete connection request!"})
            } catch (e) {
                console.log(e)
                return res.status(500).json({ message: "Something went wrong!" })
            }
        }
        return res.status(404).json({ message: "There is no connection!"})
    })
}


const addRecommendation = async (req, res) => {
    try{
        const userId = req.params.userId
        const receiverId = req.body.receiverId
        const date = req.body.date
        const description = req.body.description

        const author = await User.findOne({ userId });
        const receiver = await Nurse.findById(userId);

        if (!author || !receiver) {
            console.error('Author or receiver not found');
        }

        const newRecommendation = new Recommendations({
            authorID: userId,
            receiverID: receiverId,
            date,
            description
        })

        const savedRecommendation = await newRecommendation.save();
        const recommendationsToAdd = [savedRecommendation];

        const nurseReceived = await Nurse.findOneAndUpdate(
            { userId: receiverId },
            {
                $push: {
                    'recommendations.received': {
                        $each: recommendationsToAdd
                    }
                }
            }
        );

        const nurseGiven = await Nurse.findOneAndUpdate(
            { userId: userId },
            {
                $push: {
                    'recommendations.given': {
                        $each: recommendationsToAdd
                    }
                }
            }
        );

        console.log(newRecommendation)
        return res.status(200).json({ message: "Recommendations added successfully" });
    } catch (e) {
        console.error('Error adding recommendation: ', e);
        return res.status(500).json({ message: "Server Error!" });
    }
}



module.exports = {
    getNurses,
    getNurse,
    editNurse,
    deleteNurse,
    editNurseProfilePicture,
    editNurseBanner,
    addDocument,
    getNurseConnection,
    getNurseConnections,
    getNurseConnectionRequest,
    sendNurseConnection,
    cancelNurseConnectionRequest,
    acceptNurseConnection,
    rejectNurseConnection,
    deleteNurseConnection,
    addRecommendation

}
