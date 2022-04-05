const jwt = require('jsonwebtoken')
const secret_key = 'generating-tokne-secret-key'

export default async (userId:any)=>{
    const token = jwt.sign(userId,secret_key)
    console.log(token)
    return token
}