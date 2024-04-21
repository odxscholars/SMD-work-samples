require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const passport = require("./auth/passport")
const session = require("express-session")
const cookieParser = require("cookie-parser")
const file_upload = require('express-fileupload')
const MongoDBStore = require("connect-mongodb-session")(session)
const nurseRouter = require("./routes/nurseRoutes")
const authRouter = require('./routes/authRoutes')
const instituteRouter = require("./routes/instituteRoutes")
const { generateSecret } = require("./utils/sessionSecret")

const app = express()

//middlewears
app.use(
    cors({
        origin: process.env.WEB_URL,
        methods: ["GET", "POST", "PATCH", "DELETE"],
        credentials: true
    })
)
app.use(bodyParser.json())
app.use(express.json())
app.use(express.json({ limit: "50mb" }))
app.use(cookieParser())
app.use(file_upload({useTempFiles: true}))

//authentication
const store = new MongoDBStore({
    uri: process.env.MONGODB_URI,
    collection: "sessions",
})
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        store: store,
        cookie: {
            secure: false,
            httpOnly: true,
            maxAge: 60000 * 60 * 1, // maxAge: 1000 * 60 * 1,
            name: "nurse-session"
        }
    })
);
app.use(passport.initialize())
app.use(passport.session())

app.use(passport.authenticate("session"))

//routes
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use("/api/auth", authRouter)
app.use("/api/nurse", nurseRouter)
app.use("/api/institute", instituteRouter)
app.use("/test", async (req, res) => {
    
    res.status(200).json({ message: "WE ARE ON THE GO!" })
})

//start of program
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(
                "The server has awaken! In port: " +
                    process.env.PORT +
                    "\nAnd I have connected to the MONGODB"
            )
        })
    })
    .catch((error) => {
        console.log(error)
    })
