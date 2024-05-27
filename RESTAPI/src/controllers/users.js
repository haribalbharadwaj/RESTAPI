const User = require('../models/users')

const getUser=async (req, res) => {
    try {
        const users = await User.find();
        res.json({
            status: "SUCCESS",
            data: users
        });
    } catch (error) {
        res.json({
            status: "Failure",
            message: 'Something went wrong'
        });
    }
}

const createUser=async (req, res) => {
    try {
        const { name, email, isMinor, phone, password } = req.body;
        await User.create({ name, email, isMinor, phone, password });
        res.json({
            status: "SUCCESS",
            message: "User created successfully"
        });
    } catch (error) {
        res.json({
            status: "Failure",
            message: 'Something went wrong'
        });
    }
}

const updateUser=async(req,res)=>{
    try{
        const { id }=req.params
        const {name,email,isMinor,phone,password} = req.body;
        await User.findByIdAndUpdate( id,{name,email,isMinor,phone,password})
        res.json({
            status:"SUCCESS",
            message:"User Updated Successfully"
        })
    }catch(error){
        res.status(500).json({
            status:"failure",
            message:"Something went wrong"
        })
    }
}

const deleteUser=async(req,res)=>{
    try{
        const { id }=req.params
        await User.findByIdAndDelete( id )
        res.json({
            status:"SUCCESS",
            message:"User DELETED Successfully"
        })
    }catch(error){
        res.status(500).json({
            status:"failure",
            message:"Something went wrong"
        })
    }
}

module.exports={
    getUser,
    createUser,
    updateUser,
    deleteUser

}
