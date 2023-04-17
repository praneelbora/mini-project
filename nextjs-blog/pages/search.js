import Image from 'next/image'; 
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import Profile from '../public/Profile.png'
import Dashboard from '../Components/Dashboard';
import { useState, useEffect } from 'react';
import { useSession, getSession } from 'next-auth/react';

export default function Search(){
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
        <Dashboard profileImg={session?.user?.profilePic}></Dashboard>
        
    );

}
