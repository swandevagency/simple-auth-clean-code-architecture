import userFunctions from "../../databseLogic";
// import generateToken from '../../modules/jwt/generateToken'
import hashPassword from '../../modules/bcrypt/hashPassword'
import validateUser from '../../entities/user'
const requiredModules = {hashPassword}
const user = new userFunctions

export default async (username:string,password:string)=>{
    try {
        console.log('usecase')
        if(!username || !password){
            return{
                statusCode : 400,
                body : {
                    msg : 'provide username and password'
                }
            }
        }
        const usernameAlreadyExist = await user.getByUserName(username)
        if(usernameAlreadyExist){
            return {
                statusCode : 400,
                body:{
                    msg : 'this username has already taken'
                }
            }
        }
        const information = {username,password}
        const validatedUser = await validateUser(information,requiredModules)
        const newUser = await user.create(validatedUser.username,validatedUser.password)
        return{
            statusCode : 200,
            body:{
                msg : 'user added successfully',
                newUser
            }
        }
    // const token = generateToken(newUser._id)
    } catch (err:any) {
        return {
            statusCode : 400,
            body : {
                msg : err.message
            }
        }
    }
}