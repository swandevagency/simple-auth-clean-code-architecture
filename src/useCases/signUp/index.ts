import userFunctions from "../../databseLogic";
// import generateToken from '../../modules/jwt/generateToken'
import hashPassword from '../../modules/bcrypt/hashPassword'
import validateUser from '../../entities/user'
// const requiredModules = {hashPassword}
const requiredModules = {}
const user = new userFunctions

export default async (username:string,password:string)=>{
    try {

        const validatedUser = await validateUser({
            username,
            password
        },requiredModules);

        const usernameAlreadyExist = await user.getByUserName(validatedUser.username)
        if(usernameAlreadyExist){
            console.log('1 ')
            throw new Error('this username has been taken')
        }
        const hashedPassword = await hashPassword(validatedUser.password)
        if(!hashedPassword){
            throw new Error('something went wrong')
        }
        validatedUser.password = hashedPassword
        
        const newUser = await user.create(validatedUser.username,validatedUser.password)
        return{
            msg : 'user added successfully',
            newUser
        }
    // const token = generateToken(newUser._id)
    } catch (err:any) {
        throw err
    }
}