var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Mphasis235');

var Schema = mongoose.Schema;

var StddentsModelSchema = new Schema(
    {   
        empno: Number,
        ename: String,
        email: String,
        username: String,
        password: String

    }, 
    { versionKey: false  } );

var StddentsModel = mongoose.model('employees', StddentsModelSchema );

// Exporting StddentsModel 
module.exports = StddentsModel;

