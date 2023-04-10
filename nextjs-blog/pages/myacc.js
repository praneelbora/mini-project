import Image from 'next/image'; 
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import Profile from '../public/Profile.png'
import Dashboard from '../Components/Dashboard';
import main from '../styles/main.module.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession, getSession, signOut, signIn, signUp } from 'next-auth/react';

export default function MyAcc(){
    const [isLoading, setIsLoading] = useState(true);
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

    return(
        <>
            <Dashboard img={Profile}></Dashboard>
            <div className={main.main}>
            <Image className={main.dp} src={Profile} alt='Profile Image'/>
                {/* USER NAME & USERNAME -- BACKEND CONNECTION */}
                <br/>
                <br/>
                <div className={main.details}>
                    {session?.user?.fname}
                    <br/>
                    @{session?.user?.username}
                    <br/>
                    <button onClick={() => signOut()} className={main.sout}>Sign Out</button>
                </div>
            </div>
        </>

    );
    }

