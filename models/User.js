const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        minlength:5,
        maxLength:100,
        unique:true,
        required:true,
        validate: {
            validator: function isUsernameValid(v) {
                return /^[a-zA-Z0-9.\-_$@*!]{3,30}$/.test(v);
            },
            message: (props) => `${props.value} is not a valid username.`,
        },
    },
    password:{
        type: String,
        minlength: 8,
        maxlength: 1024,
        required: true,
    },

    phone: {
        code: {
            type: String,
            minlength: 2, // Egypt code is 20 with length 2
            maxlength: 2,
            required: true,
        },
        number: {
            type: String,
            unique: true,
            validate: {
                validator: function isPhoneNumberValid(v) {
                    return /^01[0-2|5]{1}[0-9]{8}$/.test(v);
                },
                message: (props) => `${props.value} is not a valid phone number.`,
            },
            required: [true, 'phone number is required.'],
           
        },
    },

    userRole:{
        type:String,
        enum:['ADMIN',"GUEST"],
        required:true,
    },

});




const User = mongoose.model('User',userSchema);

module.exports ={User};