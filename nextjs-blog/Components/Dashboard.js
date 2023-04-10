import Image from 'next/image'; 
import logo from '../public/logo.png'
import Link from 'next/link';
import dash from './CSS/dash.module.css';
import Profile from '../public/Profile.png'
import Read from '../public/Read.png';
import Write from '../public/Write.png';
import Search from '../public/Search_logo.png';
import SignOut from '../public/vercel.svg';
import { signOut } from 'next-auth/react';

export default function Dashboard()
{
    return(
        <nav className={dash.navbar} id="navbar">
          <Image className={dash.logo} src={logo} alt="Logo" />
          <ul className={dash.ull} style={{listStyleType: 'none'}}>
            <li className={dash.nav}><Link href='/myreviews' className={dash.nav3}>My Reviews</Link></li>
            <li className={dash.nav}><Link href='/writereview' className={dash.nav3}>Write Review</Link></li>
            <li className={dash.nav}><Link href='/search' className={dash.nav3}>Search</Link></li>
            {/* <li className={dash.nav1}><Link href='/myacc'><Image className= dash.profile} src={Profile} alt="Profile Image"/></Link></li> */}
            <Link href='/myacc'><Image className= {dash.profile} src={Profile} alt="Profile Image"/></Link> 
          </ul>
        </nav>
        // <div className={dash.box}>
        //     <Link href='/myacc'><Image className= {dash.profile} src={Profile} alt="Profile Image"/></Link> 
        //     <Link href='/myreviews'><Image className={dash.logo} src={Read} alt="My Reviews"/></Link> 
        //     <Link href='/writereview'><Image className={dash.logo} src={Write} alt="Write Reviews"/></Link> 
        //     <Link href='/search'><Image className={dash.logo} src={Search} alt="Search Reviews"/></Link> 
        //     <Image className={dash.logo} src={SignOut} alt="Sign Out" onClick={() => signOut()}/>
        // </div>
    );
}