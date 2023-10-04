var mongoose = require('mongoose')
var PhoneSchema = mongoose.Schema(
   {
      brand : {
         type : String,
         required: true
      },
      model : String,
      price : {
         type : Number,
         min : 200
      },
      color : String,
      image : String,
      quantity: Number
   }
)
var PhoneModel = mongoose.model('Điện thoại', PhoneSchema, 'smartphone')
/* Note: tham số thứ 1 là mô tả của collection 
(ex: Điện thoại) còn tham số thứ 3 là tên của collection 
(ex: smartphone) */

module.exports = PhoneModel;