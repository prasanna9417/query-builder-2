
module.exports.create = (req,res)=>{
    const body = req.body
    if(body.table){
        if(Object.keys(body).length==1){
            res.json({query: `SELECT * FROM ${body.table}`})
        }else{
            let query = 'SELECT '
            if(body.columns){
                body.columns.forEach(function(key){
                        query+= ` ${key},`
                })
                query+=` FROM ${body.table} `
            }else{
                query+=` * FROM ${body.table}`
            }
            

            Object.keys(body).forEach(function(key){
                switch(key){
                    case 'sort' :
                        query+=` ORDER BY ${body.sort}`
                        break
                    case 'filter' :
                        query+=` WHERE ${body.filter}`
                        break
                    case 'pagination':
                        query+=` LIMIT ${body.pagination.limit} OFFSET ${body.pagination.offset}`
                        break
                }
            })
            res.json({output: query}) 
            
        }
        
    }else{
        res.json({message: "table name should be included"})
    }
}

//example:
//{
//    "table" : "prasanna",
//   "columns" : ["city","state"],
//   "sort" : "region",
//   "filter": "age=5",
//   "pagination": {"limit":5, "offset":1}
//}