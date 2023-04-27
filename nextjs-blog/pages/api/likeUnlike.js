import { getSession } from 'next-auth/react';
import Review from '../../models/review';
import User from '../../models/user';
import dbConnect from '../../utils/dbConnect';
import handler from '../../utils/handler';

handler.post(likeUnlike)

async function likeUnlike(req, res) {
    dbConnect();
    const review = await Review.findById(req.body.id);
    const likeIds = review.upvotes.map(id => id.toString());
    const userId = req.body.user_id.toString();
    if (review.upvotes.includes(req.body.user_id)){
        await review.upvotes.pull(userId);
    } else {
        await review.upvotes.push(userId);
    }
    await review.save();
    res.json(review);
}

export default handler;