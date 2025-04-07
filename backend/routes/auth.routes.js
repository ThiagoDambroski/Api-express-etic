import { Router } from "express";


const authRoutes = Router()

//authorization is all post
authRoutes.post("/sign-up",(req,res) => {
    res.send({title:"SIGN UP PLEASE"})
})

authRoutes.post("/sign-in",(req,res) => {
    res.send({title:"WELCOME"})
})

authRoutes.post("/sign-out",(req,res) => {
    res.send({title:"BYE BYE"})
})

export default authRoutes