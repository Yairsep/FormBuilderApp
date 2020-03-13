const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const formsListSchema = new Schema({
    Id: String,
    Name: String,
    NumOfSubmission : Number,
    SubmitPageUrl: String,
    SubmissionsPageUrl: String
});

const Form = mongoose.model('formsList', formsListSchema);
module.exports = Form;