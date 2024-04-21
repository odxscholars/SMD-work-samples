const bcrypt = require("bcrypt")

const BCRYPT_SALT_ROUNDS = 12

const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const Nurse = require("../models/nurseModel")
const User = require("../models/userModel")
const Institute = require("../models/instituteModel")

const validateEmail = (email) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

const MALE_PF =
    "https://res.cloudinary.com/dtocowzq2/image/upload/v1698166263/nurse-link/bkskgjjrgf1klrqptjk4.png"
const FEMALE_PF =
    "https://res.cloudinary.com/dtocowzq2/image/upload/v1698166301/nurse-link/ygygiflaamzjeqkm6usn.png"
const COMPANY_PF =
    "https://res.cloudinary.com/dtocowzq2/image/upload/v1698166313/nurse-link/mjfmyd8wwlkw0koxnfvo.png"
const NURSE_BANNER =
    "https://res.cloudinary.com/dtocowzq2/image/upload/v1698166580/nurse-link/e5fmcxucsawasumnv9ke.png"
const COMPANY_BANNER =
    "https://res.cloudinary.com/dtocowzq2/image/upload/v1698166669/nurse-link/pbmj4mmytiq8q1u884el.png"

passport.serializeUser((user, done) => {
    process.nextTick(() => done(null, { id: user.userId }))
})

passport.deserializeUser(async (user, done) => {
    try {
        const userLogin = await User.findById({ _id: user.id })
        done(null, userLogin)
    } catch (error) {
        done(error)
    }
})

passport.use(
    "register",
    new LocalStrategy(
        {
            usernameField: "username",
            passwordField: "password",
            passReqToCallback: true,
            session: false,
        },
        async (req, username, password, done) => {
            try {
                const {
                    // general prereqs
                    userType,
                    email,
                    country,
                    city,

                    //for nurses
                    firstname,
                    lastname,
                    birthdate,
                    gender,

                    //for Institute
                    instituteName,
                } = req.body

                const user = await User.findOne({
                    $or: [{ username }, { email }],
                })

                if (user !== null)
                    return done(null, false, {
                        message: "User already exists",
                    })

                if (!validateEmail(email))
                    return done(null, false, {
                        message: "Please provide a valid email",
                    })

                const salt = await bcrypt.genSalt(BCRYPT_SALT_ROUNDS)
                const newPass = await bcrypt.hash(password, salt)

                const newUser = await User.create({
                    username,
                    password: newPass,
                    email,
                    userType,
                })

                if (userType === "nurse") {
                    let pf = ""
                    if (gender === "Male") {
                        pf = MALE_PF
                    } else if (gender === "Female") {
                        pf = FEMALE_PF
                    } else {
                        pf = COMPANY_PF
                    }
                    const newNurse = await Nurse.create({
                        userId: newUser._id,
                        firstName: firstname,
                        lastName: lastname,
                        birthdate,
                        gender,
                        country,
                        city,
                        profilePicture: pf,
                        bannerPicture: NURSE_BANNER,
                    })
                    req.login(newNurse, (loginErr) => {
                        if (loginErr) {
                            return done(loginErr)
                        }

                        console.log("User created!")
                        return done(null, newNurse)
                    })
                } else {
                    const newInstitute = await Institute.create({
                        userId: newUser._id,
                        instituteName,
                        country,
                        city,
                        profilePicture: COMPANY_PF,
                        bannerPicture: COMPANY_BANNER,
                    })

                    req.login(newInstitute, (loginErr) => {
                        if (loginErr) {
                            return done(loginErr)
                        }

                        console.log("Institute created!")
                        return done(null, newInstitute)
                    })
                }
            } catch (e) {
                console.log(e)
                return done(e)
            }
        }
    )
)

passport.use(
    "login",
    new LocalStrategy(
        {
            usernameField: "username",
            passwordField: "password",
            session: true,
        },
        async (username, password, done) => {
            try {
                const user = await User.findOne({ username })
                if (!user) {
                    return done(null, false, {
                        message: "No username such as exists!",
                    })
                }
                const match = bcrypt.compare(password, user.password)

                if (!match) {
                    return done(null, false, { message: "Wrong password!" })
                }

                if (user.userType === "nurse") {
                    const nurse = await Nurse.findOne({ userId: user._id })
                    if (!nurse)
                        return done(null, false, {
                            message: "Could not find the nurse account.",
                        })

                    return done(null, nurse)
                } else {
                    const institute = await Institute.findOne({
                        userId: user._id,
                    })
                    if (!institute)
                        return done(null, false, {
                            message: "Could not find the institute account.",
                        })

                    return done(null, institute)
                }
            } catch (e) {
                console.error(e)
            }
        }
    )
)

passport.use(
    new LocalStrategy(
        {
            usernameField: "username",
            passwordField: "password",
        },
        async (username, password, done) => {
            try {
                const nurse = await Nurse.findOne({ username })
                if (!nurse) {
                    return done(null, false, { message: "Invalid username" })
                }
                if (!nurse.isValidPassword(password)) {
                    return done(null, false, { message: "Invalid password" })
                }
                return done(null, nurse)
            } catch (error) {
                return done(error)
            }
        }
    )
)

module.exports = passport
