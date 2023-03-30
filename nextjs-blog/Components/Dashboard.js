import Image from 'next/image'; 
import Link from 'next/link';
import dash from './CSS/dash.module.css';
import Profile from '../public/Profile.png'
import Read from '../public/Read.png';
import Write from '../public/Write.png';
import Search from '../public/Search_logo.png';

export default function Dashboard(Profile)
{
    return(
        <div className={dash.box}>
            <Link href='/myacc'><Image className= {dash.profile} src={Profile.img} alt="Profile Image"/></Link> 
            <Link href='/myreviews'><Image className={dash.logo} src={Read} alt="My Reviews"/></Link> 
            <Link href='/writereview'><Image className={dash.logo} src={Write} alt="Write Reviews"/></Link> 
            <Link href='/search'><Image className={dash.logo} src={Search} alt="Search Reviews"/></Link> 
        </div>
    );
}