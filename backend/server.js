import express from "express"
import {PORT} from "./config/env.js"
//Import routes

import userRoutes from "./routes/user.routes.js"
import authRoutes from "./routes/auth.routes.js"


const app = express()
const port = PORT



app.use("/api/users",userRoutes)
app.use("/api/auth",authRoutes)

app.get("/",(req,res) => {
    res.send("Hello World!")
})

app.listen(port,() => {
    console.log("Working: ",port)
})