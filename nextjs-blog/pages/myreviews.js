import Image from 'next/image'; 
import Link from 'next/link';
import Review from '../models/review';
import dbConnect from '../utils/dbConnect';
import 'bootstrap/dist/css/bootstrap.css';
import Profile from '../public/Profile.png'
import Dashboard from '../Components/Dashboard';
import VReview from '../Components/View_Review';
import main from '../styles/main.module.css';
import { useState, useEffect } from 'react';
import { useSession, getSession } from 'next-auth/react';

// export async function prevReviews() {
//     const response = await fetch('/api/getReviews', {
//         method: 'GET'
//       });
    
//       const data = await response.json();
    
//       if (!response.ok) {
//         throw new Error(data.message || 'Something went wrong!');
//       }

//     //   setArr(data)
//       return data;
// }

export async function getServerSideProps(context) {
    dbConnect();
    let reviews = await Review.find().populate('userId')
    //   return data;
    return {
        props: {reviews: JSON.parse(JSON.stringify(reviews))}
    }
}

export default function MyReviews({reviews}){
    const [isLoading, setIsLoading] = useState(true);
    // check if logged in and redirect to login page if so
    const { data: session } = useSession();
    useEffect(() => {
        getSession().then((sess) => {
            if(!sess){
                router.replace('/');
            } else {
                setIsLoading(false);
            }
        })
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    // console.log(reviews);
    const newId = session?.user?._id;

    return(
        <>
            <Dashboard profileImg={session?.user?.profilePic}/>
            <h1 className={main.heading}>Previous Reviews:</h1>
            <div className={main.main1}>
            <div className="row my-1">
            {reviews.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1).map((review) => {
                if (review.userId._id===newId){
                return(
                <VReview key={review._id} rid={review._id} dashImg={review.dashImg} title={review.title} reviewer={review.userId.username} desc={review.desc} rating={review.rating} eagleScore={review.eagleScore} country={review.country} city={review.city} upvotes={review.upvotes.length} upvoted={review.upvotes.includes(newId)} createdAt={review.createdAt} />
            )}})}
                
                </div>
            </div>
        </>
        
    );

}
