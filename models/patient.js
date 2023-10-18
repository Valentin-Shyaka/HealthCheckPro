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
    blood_pressure:{
        type: String,
        required: true,
    },
    temperature:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: new Date()
    },
    patient_NID:{
        type: String,
        required: true
    },
    frequent_sickness:[{
        type: String,
        required: false

    }]
})

module.exports= mongoose.model('patient',patientSchema)