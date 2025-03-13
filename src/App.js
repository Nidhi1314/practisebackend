import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true
    }
));
app.use(express.json({limit:'16kb'})) //ye toh wo hai jo form se data aaya we have to also think jb url se data aayega
app.use(express.urlencoded({extended:true, limit:"16kb"}));
app.use(express.static('public'));
app.use(cookieParser()); //crud on cookie keeps cookie in user vrowser omly server can access
export default app;