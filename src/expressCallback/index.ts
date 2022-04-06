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

