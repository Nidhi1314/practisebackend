const asyncHandler=(fn)=>async(re,res,next)=>{
    try{
await(req,res,next);
    }catch(error){
        res.status(error.code || 500).json({
            success:false,
            message:error.message,
        })
    }
} //it is a higher order function
//a fn passed into another function
//this is 

// const asyncHnadler=(requestHandler)=>{
//     (req,res,next)=>{
//         Promise.resolve().catch((err)=>next(err));
//     }
// }
// export {asyncHandler};
//asyncHandler is a higher-order function (HOF) that takes an asynchronous function fn (which represents an Express route handler).
// It returns a new async function that takes req, res, and next (just like any Express middleware).

//why this asynchandler is necessary because it standarises how the error and response comes