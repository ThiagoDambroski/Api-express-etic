import mongoose from "mongoose"

const connectionDB = async () => {

    try {
        await mongoose.connect("URL")
        console.log("WE ARE LOGGED")

    } catch (error) {
        console.log("Error on connection",error)
        process.exit(1)
    }
}

export default connectionDB