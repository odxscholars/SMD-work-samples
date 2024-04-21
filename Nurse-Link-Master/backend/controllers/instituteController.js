const passport = require("passport")
const Institute = require("../models/instituteModel")
const User = require("../models/userModel")

//get all institutes
const getInstitutes = async (req, res) => {
    try {
        const institutes = await Institute.find({})
        res.status(200).json(institutes)
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: "Something went wrong" })
    }
}

//get one institute based on userId
const getInstitute = async (req, res) => {
    try {
        const { userId } = req.params
        const institute = await Institute.findOne({ userId })

        if (!institute)
            return res
                .status(404)
                .json({ message: "Could not find the institute!" })

        res.status(200).json(institute)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Something went wrong!" })
    }
}

const editInstitute = async (req, res) => {
    try {
        const userId = req.user._id
        const institute = await Institute.findOneAndUpdate(
            { userId },
            {
                ...req.body,
            }
        )
        if (!institute)
            return res
                .status(404)
                .json({ message: "Could not find the institute!" })

        return res.status(200).json({ message: "Successfully edited!" })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Something went wrong!" })
    }
}

const deleteInstitute = async (req, res) => {
    const userId = req.user._id
    try {
        const institute = await Institute.findOneAndDelete({ userId })
        const user = await User.findOneAndDelete({ _id: userId })
        if (!institute)
            return res
                .status(404)
                .json({ message: "Could not find institute!" })
        if (!user)
            return res.status(404).json({ message: "Could not find user!" })

        return res.status(200).json({ message: "Successfully deleted!" })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Something went wrong!" })
    }
}

module.exports = { getInstitutes, getInstitute, editInstitute, deleteInstitute }
