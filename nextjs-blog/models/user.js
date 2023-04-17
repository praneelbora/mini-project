import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import validator from 'validator'
import Review from './review'

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: [true, "Account already exists"],
        validate: [validator.isAlphanumeric, 'Usernames can only have alphanumeric characters']
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Account already exists"],
        validate: [validator.isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, "Please enter your email"],
        minLength: [6, "Your password must be at least 6 characters long"],
        select: false, //dont send back password after request
    },
    profilePic: {
        type: String,
        required: true,
        default: 'https://res.cloudinary.com/dkslaee8q/image/upload/v1681627905/profilePics/pngegg_qkawtl.png',
    },
    role: {
        type: String,
        default: 'user',
        enum: {
            values: [
                'user',
                'moderator',
                'admin'
            ],
        }
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }],
    upvotedReviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
})

// ENCRYPTION 
userSchema.pre('save', async function(next){

    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}


export default mongoose.models.User || mongoose.model('User', userSchema)