import Image from 'next/image'; 
import Link from 'next/link';
import Review from '../models/review';
import dbConnect from '../utils/dbConnect';
import 'bootstrap/dist/css/bootstrap.css';
import Profile from '../public/Profile.png'
import Dashboard from '../Components/Dashboard';
import main from '../styles/main.module.css';
import { useState, useEffect, useRef } from 'react';
import VReview from '../Components/View_Review';
import { useSession, getSession } from 'next-auth/react';

export async function getServerSideProps(context) {
    dbConnect();
    let reviews = await Review.find().populate('userId')
    //   return data;
    return {
        props: {reviews: JSON.parse(JSON.stringify(reviews))}
    }
}

export default function Search({reviews}){
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('')
    const searchRef = useRef();
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

    function handleOnChange(){
        setSearchQuery(searchRef.current.value);
    }


    const filteredReviews = reviews.filter((rev) => {
        return (
            rev.title.split('/').some((part) => part.includes(`${searchQuery}`)) || rev.desc.split('/').some((part) => part.includes(`${searchQuery}`)) || rev.city.split('/').some((part) => part.includes(`${searchQuery}`)) || rev.country.split('/').some((part) => part.includes(`${searchQuery}`)) || rev.hotel.split('/').some((part) => part.includes(`${searchQuery}`)) || rev.userId.username.split('/').some((part) => part.includes(`${searchQuery}`)) 
        )
      });

    const newId = session?.user?._id;

    return(
        <>
            <Dashboard profileImg={session?.user?.profilePic}/>
            <h1 className={main.heading}>All Reviews:</h1>
            <div className={main.main1}>
            <div className='form mb-5' style={{'width':'60vw'}}>
                {/* <label for="search" className="form-label">Search:</label> */}
                <input className="form-control" type="text" id="search" name='search' ref={searchRef} onChange={handleOnChange} placeholder='Search through thousands of reviews...'/>
            </div>
            <div className="row">
            {filteredReviews.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1).map((review) => {
                
                return(
                <VReview key={review._id} dashImg={review.dashImg} title={review.title} reviewer={review.userId.username} desc={review.desc} rating={review.rating} eagleScore={review.eagleScore} country={review.country} city={review.city} upvotes={review.upvotes.length} upvoted={review.upvotes.includes(newId)} createdAt={review.createdAt} />
            )})}
                </div>
            </div>
        </>
        
    );

}
