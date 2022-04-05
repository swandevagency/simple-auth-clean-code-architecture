const jsonwebtoken = require('jsonwebtoken') // i guess its not necessary to inject frameworks here and why we are calling them frameworks? cause we are not applying any changes to data here or in usecases iam just worry if converting format of data needed that where should it be done in usecase or in entity
const frameworks = {
    jsonwebtoken
}


// module.exports = async function makeHttp(controller){
//     (req:any,res:any) =>{
//         const httpRequest:any = req
//     }
//     controller(httpRequest)
// }

//chera nmishe injuri nevesht

export default (controller:any) => {
    return(req:any, res:any) =>{
        const httpRequest = {
            body : req.body,
            headers : req.headers,
            query : req.query,
            params : req.params,
            ip : req.ip,
            method : req.method,
            path : req.path
        }
        console.log('request recievd to expcb')
        // controller(httpRequest,{frameworks}) why we should pass jwt here ??
        controller(httpRequest)
        .then((httpResponse:any) =>{
            if(httpResponse.headers){
                res.set(httpResponse.headers)
            }
            res.status(httpResponse.statusCode).send(httpResponse.body)
            return
        }).catch((err:any) =>{
            return res.status(500).send({
                msg : 'an unknown error acquired'
            })
        })
    }
    
}

