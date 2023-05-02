import Image from 'next/image'; 
import Link from 'next/link';
import Review from '../models/review';
import User from '../models/user';
import dbConnect from '../utils/dbConnect';
import 'bootstrap/dist/css/bootstrap.css';
import Profile from '../public/Profile.png'
import { useRouter } from 'next/router';
import Dashboard from '../Components/Dashboard';
import main from '../styles/main.module.css';
import { useState, useEffect, useRef } from 'react';
import VReview from '../Components/View_Review';
import { useSession, getSession } from 'next-auth/react';

export async function getServerSideProps(context) {
    dbConnect();
    let sess = await getSession(context);
    let reviews = await Review.find().populate('userId')
    let user = await User.find({ _id: sess?.user?._id })
    //   return data;
    return {
        props: {reviews: JSON.parse(JSON.stringify(reviews)), updatedUser: JSON.parse(JSON.stringify(user))}
    }
}

export default function Search({reviews,updatedUser}){
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('')
    const [sortFilter, setSortFilter] = useState('createdAt')
    const searchRef = useRef();
    const router = useRouter();
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
        setSearchQuery(searchRef.current.value.toLowerCase());
    }
    const handleDropdown = (e) => {
        setSortFilter(e.target.value);
    };


    const filteredReviews = reviews.filter((rev) => {
        return (
            rev.title.toLowerCase().split('/').some((part) => part.includes(`${searchQuery}`)) || rev.desc.toLowerCase().split('/').some((part) => part.includes(`${searchQuery}`)) || rev.city.toLowerCase().split('/').some((part) => part.includes(`${searchQuery}`)) || rev.country.toLowerCase().split('/').some((part) => part.includes(`${searchQuery}`)) || rev.hotel.toLowerCase().split('/').some((part) => part.includes(`${searchQuery}`)) || rev.userId.username.toLowerCase().split('/').some((part) => part.includes(`${searchQuery}`)) 
        )
      });

    const newId = session?.user?._id;

    return(
        <>
            <Dashboard profileImg={updatedUser[0].profilePic}/>
            <h1 className={main.heading}>All Reviews:</h1>
            <div className={main.main1}>
            <div className='form mb-5' style={{'width':'60vw'}}>
                {/* <label for="search" className="form-label">Search:</label> */}
                <input className="form-control" type="text" id="search" name='search' ref={searchRef} onChange={handleOnChange} placeholder='Search through thousands of reviews...'/><br />
                <div style={{'marginLeft':'35vw','transform':'translateX(-50%)'}}>Sort according to: <select value={sortFilter} onChange={handleDropdown}>
                    <option value='createdAt'>Review Date</option>
                    <option value='rating'>Rating</option>
                    <option value='eagleScore'>eagleScore</option>
                    <option value='upvotes'>upvotes</option>
                </select>
                </div>
            </div>
            <div className="row">
            {(sortFilter=='createdAt')?
            (filteredReviews.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1).map((review) => {
                return(
                <VReview key={review._id} rid={review._id} dashImg={review.dashImg} title={review.title} reviewer={review.userId.username} desc={review.desc} rating={review.rating} eagleScore={review.eagleScore} country={review.country} city={review.city} upvotes={review.upvotes.length} upvoted={review.upvotes.includes(newId)} createdAt={review.createdAt} />
            )})):(sortFilter=='rating')?
            (filteredReviews.sort((a, b) => a.rating < b.rating ? 1 : -1).map((review) => {
                return(
                <VReview key={review._id} rid={review._id} dashImg={review.dashImg} title={review.title} reviewer={review.userId.username} desc={review.desc} rating={review.rating} eagleScore={review.eagleScore} country={review.country} city={review.city} upvotes={review.upvotes.length} upvoted={review.upvotes.includes(newId)} createdAt={review.createdAt} />
            )})):(sortFilter=='eagleScore')?
            (filteredReviews.sort((a, b) => a.eagleScore < b.eagleScore ? 1 : -1).map((review) => {
                return(
                <VReview key={review._id} rid={review._id} dashImg={review.dashImg} title={review.title} reviewer={review.userId.username} desc={review.desc} rating={review.rating} eagleScore={review.eagleScore} country={review.country} city={review.city} upvotes={review.upvotes.length} upvoted={review.upvotes.includes(newId)} createdAt={review.createdAt} />
            )})):
            (filteredReviews.sort((a, b) => a.upvotes < b.upvotes ? 1 : -1).map((review) => {
                return(
                <VReview key={review._id} rid={review._id} dashImg={review.dashImg} title={review.title} reviewer={review.userId.username} desc={review.desc} rating={review.rating} eagleScore={review.eagleScore} country={review.country} city={review.city} upvotes={review.upvotes.length} upvoted={review.upvotes.includes(newId)} createdAt={review.createdAt} />
            )}))}
                </div>
            </div>
        </>
        
    );

}
