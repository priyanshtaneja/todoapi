const route=require('express').Router()

let to_do=[]

route.get('/',(req,res)=>{
res.send(to_do)
})
route.post('/add',(req,res)=>{
    to_do.push({
        work:req.body.work,
        done:req.body.done
    })
    res.send(to_do)
})

route.get('/:id',(req,res)=>{
res.send(to_do[req.params.id])
})

route.patch('/update/:id',(req,res)=>{
    if(req.body.work){
     to_do[req.params.id].work = req.body.work
     }
    if(req.body.done){
         to_do[req.params.id].done = req.body.done
        }
    
    res.send(to_do)
})

route.delete('/remove/:id',(req,res)=>{
//delete to_do[req.params.id]
to_do.splice(parseInt(req.params.id),1)
res.send(to_do)
})

module.exports=route