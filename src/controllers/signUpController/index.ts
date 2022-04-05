//const signUpUscase = require('../../useCases/signUp/index') 
import signUpUscase from '../../useCases/signUp/index'

// i guess if any converting be required here is the best place to do that

export default async function signUpController(httpRequest:any){
    console.log('controller')
    try {
        const {username,password} = httpRequest.body
        const useCaseResponse = await signUpUscase(username,password)
        return useCaseResponse
    } catch (error) {
        console.log(error+'signUpController try cathc error')
        throw new Error()
    }  
}