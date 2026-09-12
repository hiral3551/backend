import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env",
});

const PORT = process.env.PORT || 8000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}`);
    });
};

startServer().catch((error) => {
    console.error("Failed to start server:", error);
    process.exit(1);
});












//this is just a approch how to use mongoose 

/* 
import express from "express"
const app= express()

(async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)   
        app.on("error",(error)=>{
            console.log("ERRR:",error)
            throw error
        }) 

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);        })
       }
    catch(error){
        console.error("Error:", error)
        throw err
    }
})()
    */