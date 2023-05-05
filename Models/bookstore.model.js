const mongoose=require("mongoose")


const BooksSchema=mongoose.Schema({
    name : {type:String,require:true},
    author : {type:String,require:true},
    category:{type:String,require:true},
    status : {type:Boolean,require:true},


},{
    versionKey:false
})

const BooksModel=mongoose.model("book",BooksSchema)

module.exports={
    BooksModel
}