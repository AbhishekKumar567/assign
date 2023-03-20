const { Decimal128 } = require("bson")
const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Please enter product name"]
    },
    Price:{
        type:Number,
        required:[true,"price is required"]
    },
    Featured:{
        type:Boolean,
        default:false
    },
    Rating:{
        type:Decimal128,
        default:0
    },
    CreatedAt:{
        type:Date,
        required:[true,"date is required"]
    },
    Company:{
        type:String,
        required:[true,"company name is required"]
    }

})

module.exports = mongoose.model('prod',productSchema)
