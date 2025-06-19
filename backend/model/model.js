const mongoose=require('mongoose')

const returnSchema=new mongoose.Schema({

    orderId:String,
    userId:String,
    status:{
        type:String,
        enum:['pending','approved','rejected'],
        default:'pending'
    },
    returnLabelUrl:String
},{timestamps:true})

module.exports=mongoose.model('ReturnRequest',returnSchema)