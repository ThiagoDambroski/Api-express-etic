import { Router } from "express";

const userRoutes = Router()

userRoutes.get("/",(req,res) => {
    res.json({title: "GET ALL USERS"})
})

userRoutes.get("/:id",(req,res) => {
    res.json({title: "GET USER BY ID"})
})

userRoutes.post("/",(req,res) => {
    res.json({title: "CREATE USER"})
})

userRoutes.put("/:id",(req,res) => {
    res.json({title: "PUT USER"})
})

userRoutes.delete("/:id",(req,res) => {
    res.json({title: "DELETE USER"})
})

export default userRoutes