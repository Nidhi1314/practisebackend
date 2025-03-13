class Apierror extends Error{
constructor(
    statusCode,
    message="something went wrong",
    errors=[],
    stack=""  //error stack
){
    //overwriting
    super(message)
    this.statusCode=statusCode
    this.data=null
    this.message=message
    this.success=false
    this.errors=errors
    if(stack){
        this.stack=stack //this is stack that stores in these all files error is there

    }else{
        Error.captureStackTrace(this, this.constructor)
    }


}
} 
export {Apierror}