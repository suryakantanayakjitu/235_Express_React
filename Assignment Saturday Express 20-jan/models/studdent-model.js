var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Mphasis235');

var Schema = mongoose.Schema;

var StddentsModelSchema = new Schema(
    {   
        rollNo: Number,
        name: String,
        email: String,
        username: String,
        password: String

    }, 
    { versionKey: false  } );

var StddentsModel = mongoose.model('students', StddentsModelSchema );

// Exporting StddentsModel 
module.exports = StddentsModel;




