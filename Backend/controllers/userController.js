const course = require('../models/course');
const User = require('../models/user');

exports.getUsers = async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.deleteUser = async(req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findByIdAndDelete(id); 
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.updateEtat = async(req,res) =>{
    var id = req.params.id
    try{
        const updatedUser = await User.findByIdAndUpdate({ "_id": id }, { $set: { etat: req.body.etat}},{ new: true });
        res.status(200).json(updatedUser);
    }catch(error){
        res.status(500).json({message: error.message});
    }

        
}
exports.updateListeCours = async(req,res) =>{
    var idUser = req.params.idUser
    var idCourse = req.params.idCourse
    try{
        const cours = await course.findById(idCourse);
        const updatedUser = await User.findByIdAndUpdate({ "_id": idUser }, 
            { 
                    $push:{ listCours:{titre: cours.titre}}
            },
            { new: true });
        res.status(200).json(updatedUser);
    }catch(error){
        res.status(500).json({message: error.message});
    }

        
}


