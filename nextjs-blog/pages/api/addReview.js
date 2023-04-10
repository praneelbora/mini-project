import { getSession } from 'next-auth/react';
import Review from '../../models/review';
import dbConnect from '../../utils/dbConnect';
import handler from '../../utils/handler';

handler.post(addReview)

async function addReview(req, res) {
    dbConnect();
    const session = await getSession({req});
    if(session){
        if (req.method == 'POST'){
            let r = new Review({
                userID: session.user._id,
                title: req.body.title,
                desc: req.body.desc,
                rating: req.body.rating,
                visitDate: req.body.visitDate,
                country: req.body.country,
                city: req.body.city,
                hotel: req.body.hotel,
                createdAt: Date.now()
            })
            await r.save()
            res.status(200).json({ success: "Success!" });
        } else {
            res.status(400).json({ error: "This method is not allowed!" });
        }
    } else {
        res.status(400).json({ error: "Log into an account first!" });
    }
}

export default handler;