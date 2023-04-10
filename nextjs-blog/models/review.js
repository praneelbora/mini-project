import mongoose, { Schema } from 'mongoose'
import User from './user'

const reviewSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    visitDate: {
        type: String,
        required: true,
        max: Date.now().toString()
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    hotel: {
        type: String,
        required: true
    },
    upvotes: {
        type: Number,
        required: true,
        default: 0
    },
    eagleScore: {
        type: String,
        default: "Processing..."
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.models.Review || mongoose.model('Review', reviewSchema)