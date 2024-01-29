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

var EmpModel = mongoose.model('employees', StddentsModelSchema );

module.exports = EmpModel;

