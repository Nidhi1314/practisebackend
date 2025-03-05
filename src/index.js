import connectDB from "./db/index.js";
import dotenv from 'dotenv';

dotenv.config(
    {
        path:'./env'
    }
)
connectDB();


/*
import express from 'express';
;(async()=>{
try{
await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
app.on("error",()=>
{
    console.log("app nable to communicate",error);
    throw error;
})

app.listen(process.env.PORT,()=>
{
    console.log("app is listeming on port",`${process.env.PORT}`);
})
}catch(error)
{
    console.log("you git error",error);
    throw err

}
})() //IIFE always stared with semicolon*/