import { getSession } from 'next-auth/react';
import User from '../../models/user';
import dbConnect from '../../utils/dbConnect';
import handler from '../../utils/handler';

handler.post(updateProfile)

// Have to Log out and Log In again for refresh in profile picture.
async function updateProfile(req, res) {
    dbConnect();
    const data = req.body;
    const session = await getSession();
    //console.log(session)
    //if(session){
        if (req.method == 'POST'){
            console.log(req.body.id, req.body.img)
            let u = await User.findByIdAndUpdate(req.body.id, {
                profilePic: req.body.img,
            })
            res.status(200).json({ success: "Success!" });
        } 
        else {
            res.status(400).json({ error: "This method is not allowed!" });
        }
    } 
//     else {
//         res.status(400).json({ error: "Log into an account first!" });
//     }
// }

export default handler;