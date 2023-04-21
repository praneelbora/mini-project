import Review from '../../models/review';
import dbConnect from '../../utils/dbConnect';
import handler from '../../utils/handler';

handler.get(getReviews)

async function getReviews(req, res) {
    dbConnect();
    let reviews = await Review.find()
    res.status(200).json( reviews );
}

export default handler;