import connectDB from "./db/index.js";
import dotenv from 'dotenv';

dotenv.config(
    {
        path:'./env'
    }
)
connectDB().then(
    ()=>
    {
        app.on("error",(error)=>{
            console.log("app unable to communicate",error);
            throw error;
        })
        app.listen(process.env.PORT || 8000,()=>
        {
            console.log(`aap listening on port ${process.env.PORT}`);
        })
    }

).catch((err)=>{
 console.log("error connection in db",err);
});


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