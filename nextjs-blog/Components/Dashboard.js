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

export default function Dashboard({ profileImg })
{
    return(
        <nav className={dash.navbar} id="navbar">
          <Link href='/'><Image className={dash.logo} src={logo} alt="Logo" /></Link>
          <ul className={dash.ull} style={{listStyleType: 'none'}}>
            <li className={dash.nav}><Link href='/myreviews' className={dash.nav3}>My Reviews</Link></li>
            <li className={dash.nav}><Link href='/writereview' className={dash.nav3}>Write Review</Link></li>
            <li className={dash.nav}><Link href='/search' className={dash.nav3}>Browse</Link></li>
            {/* <li className={dash.nav1}><Link href='/myacc'><Image className= dash.profile} src={Profile} alt="Profile Image"/></Link></li> */}
            <Link href='/myacc'><Image className= {dash.profile} src={profileImg} alt="Profile Image" width={500} height={500} style={{borderRadius:'50%'}}/></Link> 
          </ul>
        </nav>
    );
}