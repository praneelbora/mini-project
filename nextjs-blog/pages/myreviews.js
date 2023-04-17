import Image from 'next/image'; 
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import Profile from '../public/Profile.png'
import Dashboard from '../Components/Dashboard';
import VReview from '../Components/View_Review';
import main from '../styles/main.module.css';
import { useState, useEffect } from 'react';
import { useSession, getSession } from 'next-auth/react';

export default function MyReviews(){
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

    return(
        <>
            <Dashboard profileImg={session?.user?.profilePic}/>
            <h1 className={main.heading}>Previous Reviews:</h1>
            <div className={main.main1}>
            <div class="row my-1">
                <VReview/>
                <VReview/>
                <VReview/>
                <VReview/>
                <VReview/>
                <VReview/>
                <VReview/>
                <VReview/>
                <VReview/>
                <VReview/>
                <VReview/>
                </div>
            </div>
        </>
        
    );

}
