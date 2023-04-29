import Image from 'next/image'; 
import logo from '../public/logo.png'
import Link from 'next/link';
import styles from './CSS/dash.module.css';


export default function Dashboard({ profileImg })
{
    return(
        <nav className={styles.navbar} id="navbar">
          <Link href='/'><Image className={styles.logo} src={logo} alt="Logo" /></Link>
          <ul className={styles.ull} style={{listStyleType: 'none'}}>
            <li className={styles.nav}><Link href='/myreviews' className={styles.nav3}>My Reviews</Link></li>
            <li className={styles.nav}><Link href='/writereview' className={styles.nav3}>Write Review</Link></li>
            <li className={styles.nav}><Link href='/search' className={styles.nav3}>Browse</Link></li>
            <Link href='/myacc'><Image className= {styles.profile} src={profileImg} alt="Profile Image" width={500} height={500} style={{borderRadius:'50%'}}/></Link> 
          </ul>
        </nav>
    );
}