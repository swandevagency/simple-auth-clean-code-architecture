//const signUpUscase = require('../../useCases/signUp/index') 
import signUpUscase from '../../useCases/signUp/index'

// i guess if any converting be required here is the best place to do that

export default async function signUpController(httpRequest:any){

    try {
        const {username,password} = httpRequest.body
        const useCaseResponse = await signUpUscase(username,password)
        
        return {
            statusCode: 200,
            body: useCaseResponse
        }
    } catch (error:any) {
        console.log(error)
        if(error.type === 'RangeError') {
            return {
                statusCode: 403,
                body: {
                    msg: error.message
                }
            }
        }
        return {
            statusCode: 400,
            body: {
                msg: error.message
            }
        }
    }  
}