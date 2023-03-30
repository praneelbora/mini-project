import Image from 'next/image'; 
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import Profile from '../public/Profile.png'
import Dashboard from '../Components/Dashboard';
import VReview from '../Components/View_Review';
import main from '../styles/main.module.css';
export default function Home(){
    return(
        <>
            <Dashboard img={Profile}/>
            <div className={main.main}>
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
        </>
        
    );

}
