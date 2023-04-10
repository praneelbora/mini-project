import Image from 'next/image'; 
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import Profile from '../public/Profile.png'
import Dashboard from '../Components/Dashboard';
import VReview from '../Components/View_Review';
import main from '../styles/main.module.css';
export default function MyReviews(){
    return(
        <>
            <Dashboard img={Profile}/>
            <h1 className={main.heading}>Previous Reviews:</h1>
            <div className={main.main1}>
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
