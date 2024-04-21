const passport = require("passport")
const Nurse = require("../models/nurseModel")
const Institute = require("../models/instituteModel")

const register = async (req, res, next) => {
    try {
        passport.authenticate("register", (err, user, info) => {
            if (err) return next(err)
            if (!user)
                return res.status(404).json({ message: "User already exists!" })
            if (user.firstName)
                return res.status(200).json({
                    message: "Welcome to NurseLink!",
                    id: user.userId,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    userType: "nurse",
                    img: user.profilePicture,
                })
            else if (user.instituteName)
                return res.status(200).json({
                    message: "Welcome to NurseLink",
                    id: user.userId,
                    instituteName: user.instituteName,
                    userType: "institute",
                    img: user.profilePicture,
                })
        })(req, res, next)
    } catch (err) {
        console.log(err)
        next(err)
    }
}

const login = async (req, res, next) => {
    try {
        passport.authenticate("login", (err, user, info) => {
            if (err) return next(err)
            if (!user)
                return res
                    .status(404)
                    .json({ message: "Wrong Password or Username!" })
            req.login(user, (loginErr) => {
                if (loginErr) {
                    return next(loginErr)
                }
                if (user.firstName)
                    res.status(200).json({
                        message: "Welcome back to NurseLink!",
                        id: user.userId,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        userType: "nurse",
                        img: user.profilePicture,
                    })
                else if (user.instituteName)
                    res.status(200).json({
                        message: "Welcome back to NurseLink",
                        id: user.userId,
                        instituteName: user.instituteName,
                        userType: "institute",
                        img: user.profilePicture,
                    })
            })
        })(req, res, next)
    } catch (err) {
        console.log(err)
        next(err)
    }
}

const logout = async (req, res, next) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(400).json({ message: "Something went wrong!" })
        }
        res.status(200).json({ message: "Successfully Logged out!" })
    })
}

const ping = async (req, res) => {
    if(req.isAuthenticated()) {
        return res.status(200).json({message: "Still logged in!", logged: true})
    } else {
        return res.status(400).json({message: "Session expired...", logged: false})
    }
}

module.exports = { logout, login, register, ping }
