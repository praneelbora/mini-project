import mongoose, { Schema } from 'mongoose'
import User from './user'

const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    title: {
        type: String,
        required: true
    },
    dashImg: {
        type: String,
        default: 'https://res.cloudinary.com/dkslaee8q/image/upload/v1681582347/samples/landscapes/nature-mountains.jpg'
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
    traveledAt: {
        type: Date
    }
})

reviewSchema.set('timestamps', true);

export default mongoose.models.Review || mongoose.model('Review', reviewSchema)