const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var valid = require('validator');


var usersSchema: any = new mongoose.Schema({

    email: {

        type: String,
        Required: true, lowercase:true,trim: true, minlength: 1, unique: true,
    
        validate: {
          validator: valid.isEmail,
          message: '{VALUE} is not a valid email'
        }
      },
      role: {
        type: String,
        enum: ['Admin', 'Coach', 'Apprenant'],
        default: 'Apprenant'
      },
      password: { type: String, Required: true, minlength: 8 },
      admin: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
      apprenant: { type: mongoose.Schema.Types.ObjectId, ref: 'Apprenant' },
      coach: { type: mongoose.Schema.Types.ObjectId, ref: 'Coachs' },
    
      usersSchema.pre('save', async function (next) {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);
    
        next()
    }),
    usersSchema.statics.login = async function (email, password) {
        const user = await this.findOne({ email });
        if (user) {
            const isAuthenticated = await bcrypt.compare(password, user.password);
            if (isAuthenticated) {
                return user;
            }
            throw Error('incorrect pwd');
        }
        throw Error('incorrect email');
    
    }


  
})
module.exports = mongoose.model('Users', usersSchema)