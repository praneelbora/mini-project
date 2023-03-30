import Image from 'next/image'; 
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import Profile from '../public/Profile.png'
import Dashboard from '../Components/Dashboard';
import main from '../styles/main.module.css'
export default function Home(){
    return(
        <>
            <Dashboard img={Profile}></Dashboard>
            <div className={main.main}>
                <Image className={main.dp} src={Profile} alt='Profile Image'/>
                {/* USER NAME & USERNAME -- BACKEND CONNECTION */}
                <br/>
                <br/>
                <div className={main.details}>
                    JOHN DOE
                    <br/>
                    @iamjohndoe
                </div>
            </div>
        </>

    );

}
