const Patient= require('../models/patient')

const asyncHandler= require('express-async-handler')
const bcrypt= require('bcrypt')


//@desc Get all users
//@@route GET /users
//@acccess private

const getAllPatients= asyncHandler(async(req,res) =>{
    const Patients= await Patient.find().lean()
    if(!patients?.length){
        return res.status(400).json({message: "No Patients found"})
    }
    res.json(users)
})


//@desc Get all users
//@@route GET /users
//@acccess private

const createNewPatient= asyncHandler( async(req,res) =>{
    const {username,heartRate,temperature} = req.body
    //confirm data
    if(!username || !password || !Array.isArray(roles) || !roles.length){
        return res.status(400).json({messsage:'All fields are required'})
    }
    //check for duplicates
    const duplicate = await Patient.findOne({username}).lean().exec()

    if(duplicate){
        return res.status(409).json({message:'Patient already taken'})
    }
   
    const patientObject= {username,heartRate,temperature}

    //Create and store new user

    const patient = await Patient.create(patientObject)

    if(user){
        res.status(201).json({message:`New patient ${username} created`})
    }else{
        res.status(400).json({message: 'Invalid patient data received'})
    }

})

//@desc Get all users
//@@route GET /users
//@acccess private

const updatePatient= asyncHandler( async(req,res) =>{
    const {userID,username,heartRate,temperature} = req.body

    //confirm data
    if(!userID || !username || !Array.isArray(heartRate) || !heartRate.length ){
        return res.status(400).json({message:'All fields are required'})
    }
    const patient = await Patient.findById(userID).exec()
    if(!patient){
        return res.status(400).json({message:'Patient not found'})
    }

    //check for duplicate
    const duplicate= await Patient.findOne({username}).lean().exec()
    //Allow updates to original user
    if(duplicate && duplicate?._id.toString() !==userID){
        return res.status(409).json({message:'Duplicate username'})
    }
    patient.username= username
    patient.heartRate= heartRate
    user.temperature= temperature

    

    const updatedPatient= await patient.save()

    res.json({message:`${updatedPatient.username} updated`})
})

//@desc Get all users
//@@route GET /users
//@acccess private

const deletePatient= asyncHandler( async(req,res) =>{
    const {userID} = req.body
    if(!userID){
        return res.status(400).json({message:'Patient ID Required'})
    }
    
    

    const patient = await Patient.findById(id).exec()

    if(!patient){
        return res.status(400).json({message: 'Patient not found'})
    }
    const result = await patient.deleteOne()
    const reply = `username ${result.username} with ID ${result._id} deleted`
    res.json(reply)
})


module.exports={
    getAllPatients,
    createNewPatient,
    updatePatient,
    deletePatient
}