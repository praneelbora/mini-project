import Image from 'next/image'; 
import Link from 'next/link';
import Review from '../models/review';
// import User from '../models/user';
import dbConnect from '../utils/dbConnect';
import styles from '../styles/styles.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Profile from '../public/Profile.png'
import logo from '../public/logo.png';
import { useRouter } from 'next/router';
import Dashboard from '../Components/Dashboard';
import main from '../styles/main.module.css';
import { useState, useEffect, useRef } from 'react';
import OpenVReview from '../Components/OpenView_Review';
import { useSession, getSession } from 'next-auth/react';

export async function getServerSideProps(context) {
    dbConnect();
    // let sess = await getSession(context);
    let reviews = await Review.find().populate('userId')
    // let user = await User.find({ _id: sess?.user?._id })
    //   return data;
    return {
        props: {reviews: JSON.parse(JSON.stringify(reviews))}
    }
}

export default function OpenSearch({reviews}){
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('')
    const [sortFilter, setSortFilter] = useState('createdAt')
    const searchRef = useRef();
    const router = useRouter();
    // check if logged in and redirect to login page if so
    const { data: session } = useSession();
    useEffect(() => {
        getSession().then((sess) => {
            if(sess){
                router.replace('/search');
            } else {
                setIsLoading(false);
            }
        })
    },[session]);

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

    // const newId = session?.user?._id;

    return(
        <>
        <div className={styles.upperbody}>
        <nav className= {`navbar navbar-expand-lg ${styles.navbar}`} style={{background: `rgb(53, 162, 78, 100)`}}>
          <div className="container-fluid">
            <Link className="ms-3" href="/"><Image className={styles.logo1} src={logo} alt='Logo'/></Link>
            
            {/* <div className='navbar-brand'></div> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className={`${styles.ull} navbar-nav ms-auto mb-2 mb-lg-0 me-3`}>
                <li className="nav-item mx-2">
                  <Link className="nav-link active" aria-current="page" href="/opensearch">Browse</Link>
                </li>
                {/* <li className="nav-item mx-2 ">
                  <Link className="nav-link active" aria-current="page" href="#">About Us</Link>
                </li> */}
                <li className="nav-item mx-2">
                  <Link className="nav-link active" aria-current="page" href="mailto:praneel.bora@somaiya.edu">Contact</Link>
                </li>
                {!session?<>
                <li className="nav-item mx-2">
                  <Link className="nav-link active" aria-current="page" href="/newlogin">Log In</Link>                  
                </li> 
                <li className="nav-item mx-2">
                  <Link className="nav-link active" aria-current="page" href="/newsignup">Sign Up</Link>                  
                </li></>:<>
                <li className="nav-item mx-2">
                  <Link className="nav-link active" aria-current="page" href="/myacc">Hi {session?.user?.username}</Link>                  
                </li> 
                <li className="nav-item mx-2">
                  <Link className="nav-link active" aria-current="page" href={'/'} onClick={() => signOut()}>Sign Out</Link>                  
                </li></>}
                
                

                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li> */}
                
              </ul>
              
            </div>
          </div>
        </nav>
        </div>
            {/* <Dashboard profileImg={updatedUser[0].profilePic}/> */}
            <h1 className={main.heading}>All Reviews:</h1>
            <div className={main.main1}>
            <div className='form mb-5' style={{'width':'80vw'}}>
                {/* <label for="search" className="form-label">Search:</label> */}
                <input className="form-control" type="text" id="search" name='search' ref={searchRef} onChange={handleOnChange} placeholder='Search through thousands of reviews...'/><br />
                <div style={{transform:'translateX(0vw)', textAlign: 'center'}}>Sort according to: <select value={sortFilter} onChange={handleDropdown}>
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
                <OpenVReview key={review._id} rid={review._id} dashImg={review.dashImg} title={review.title} reviewer={review.userId.username} desc={review.desc} rating={review.rating} eagleScore={review.eagleScore} country={review.country} city={review.city} upvotes={review.upvotes.length} createdAt={review.createdAt} />
            )})):(sortFilter=='rating')?
            (filteredReviews.sort((a, b) => a.rating < b.rating ? 1 : -1).map((review) => {
                return(
                <OpenVReview key={review._id} rid={review._id} dashImg={review.dashImg} title={review.title} reviewer={review.userId.username} desc={review.desc} rating={review.rating} eagleScore={review.eagleScore} country={review.country} city={review.city} upvotes={review.upvotes.length} createdAt={review.createdAt} />
            )})):(sortFilter=='eagleScore')?
            (filteredReviews.sort((a, b) => a.eagleScore < b.eagleScore ? 1 : -1).map((review) => {
                return(
                <OpenVReview key={review._id} rid={review._id} dashImg={review.dashImg} title={review.title} reviewer={review.userId.username} desc={review.desc} rating={review.rating} eagleScore={review.eagleScore} country={review.country} city={review.city} upvotes={review.upvotes.length} createdAt={review.createdAt} />
            )})):
            (filteredReviews.sort((a, b) => a.upvotes.length < b.upvotes.length ? 1 : -1).map((review) => {
                return(
                <OpenVReview key={review._id} rid={review._id} dashImg={review.dashImg} title={review.title} reviewer={review.userId.username} desc={review.desc} rating={review.rating} eagleScore={review.eagleScore} country={review.country} city={review.city} upvotes={review.upvotes.length} createdAt={review.createdAt} />
            )}))}
                </div>
            </div>
        </>
        
    );

}
