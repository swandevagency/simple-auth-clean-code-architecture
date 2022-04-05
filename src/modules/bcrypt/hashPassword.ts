import bcrypt from 'bcrypt'

export default async (password:string) =>{
    try {
        return await bcrypt.hash(password,10)
    } catch (error) {
        console.log(error+'something went wrong while hashing password')
        throw new Error('something went wrong while hashing password')
    }
}