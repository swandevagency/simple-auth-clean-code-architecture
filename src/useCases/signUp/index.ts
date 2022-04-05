import userFunctions from "../../databseLogic";
// import generateToken from '../../modules/jwt/generateToken'
import hashPassword from '../../modules/bcrypt/hashPassword'
import validateUser from '../../entities/user'
const requiredModules = {hashPassword}
const user = new userFunctions

export default async (username:string,password:string)=>{
    try {
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
    // const token = generateToken(newUser._id)//   ----2 uniq boodan username tu database check nashod -----3 model ha sakhte nashodan 
    } catch (error) {
        console.log('the response object must be create here')
    }
}