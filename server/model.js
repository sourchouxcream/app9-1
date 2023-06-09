const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Eingsomnia_Data',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(result => console.log('Connected'))
.catch(err => console.log(err))

let studentSchema = new mongoose.Schema({
    stdId: String,
    stdName: String,
    stdGrade: Number

})
let Student = mongoose.model('Student',studentSchema)
module.exports = Student