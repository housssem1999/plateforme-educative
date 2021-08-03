const Course = require('../models/course');

exports.getCourses = async(req, res) => {
    try {
        const cours = await Course.find();
        res.json(cours);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.getCourse = async(req, res) => {
    try {
        const id = req.params.id;
        const cours = await Course.findById(id);
        res.json(cours);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
};

exports.getCoursesByTitre = async(req, res) => {
    try {
        const regex =new RegExp(req.query.term ,'i'); 
        console.log(regex);
        const cours = await Course.find(
            { $or: [{titre: regex},{description: regex}] }
         )
        res.json(cours);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.addCourse = async(req, res) => {
    const course = new Course({
        titre: req.body.titre,
        description: req.body.description,
        contenu: req.body.contenu,
        date: req.body.date,
        type: req.body.type
    });
        
    try {
        const newCours = await course.save();
        res.status(201).json(newCours);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

exports.deleteCourse = async(req, res) => {
    const id = req.params.id;

    try {
        const course = await Course.findByIdAndDelete(id); 
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.updateCourse = async(req,res) => {
    const course = new Course({type: req.body});

    try {
        // TODO a terminer
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
