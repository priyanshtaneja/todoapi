const express=require('express')
const svr=express()


svr.use(express.json())
svr.use(express.urlencoded({extended:true}))


let list=require('./todolist')

svr.use('/todos',express.static('G:/cb wd course/todolist/frontend'))
svr.use('/todo',list)
svr.listen(8002)