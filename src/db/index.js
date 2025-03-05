import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js';


const connectDB= async()=>{
    try{
        const connectioninstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n mongoose got connected: dbhost:: ${connectioninstance.connection.host}`);



    }
    catch(error){
        console.log("unable to connect",error);
        process.exit(1); //throw error ki jagah ye bhi likh skte hain

    }
   
}
export default connectDB;