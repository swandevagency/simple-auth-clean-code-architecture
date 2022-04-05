export default async (information:any,requiredModules:any)=>{
    console.log('entity')
    const {username,password}:any=information
    if(!username || username.length <3){
        throw new Error('username must have at least 3 charecters')
    }
    if(!password || password.length <5){
        throw new Error('password must have at least 5 charecters')
    }
    const {hashPassword} = requiredModules
    const hashedPassword = await hashPassword(password)
    if(!hashedPassword){
        throw new Error('some thing went wrong')//here is the reason that we should not do hashing password in entity
    }
    return {
        username,
        password : hashedPassword
    }
}