const mongoose= require('mongoose')

const patientSchema= new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    heartRate:[{
        type: String,
        default: "Employee"
    }],
    temperature:{
        type: Number,
        required: true
    }
})

module.exports= mongoose.model('patient',patientSchema)