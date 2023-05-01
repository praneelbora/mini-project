import { getSession } from 'next-auth/react';
import Review from '../../models/review';
import User from '../../models/user';
import dbConnect from '../../utils/dbConnect';
import handler from '../../utils/handler';

handler.post(addReview)

async function addReview(req, res) {
    dbConnect();
    const data = req.body;
    if (req.method == 'POST'){
        const newResponse = await fetch('http://jsbhumra.pythonanywhere.com/review?desc='+req.body.desc,{
            method: 'POST'
        }
        )
        const descData = await newResponse.json();
        // console.log(descData);
        var score = descData.score;
        var mult;
        if(descData.sentiment=='Positive'){
            mult="";
        } else {
            mult="- ";
        }
        var eagScore = mult+score*100+"%";
        // console.log(eagScore);
        let r = new Review({
            userId: req.body.id,
            title: req.body.title,
            dashImg: req.body.img,
            desc: req.body.desc,
            rating: req.body.rating,
            country: req.body.country,
            city: req.body.city,
            hotel: req.body.hotel,
            traveledAt: req.body.date,
            eagleScore: eagScore
        })
        await r.save();
        let u = await User.findByIdAndUpdate(req.body.id, {
            $push: {
                reviews: r._id,
            }
        })
        console.log(r._id);
        res.status(200).json({ success: "Success!" });
    } else {
        res.status(400).json({ error: "This method is not allowed!" });
    }
}

export default handler;