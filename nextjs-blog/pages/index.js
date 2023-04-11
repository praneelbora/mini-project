//document.body.style.overflowX = "hidden";
import Image from 'next/image'; 
import Link from 'next/link';
import logo from '../public/logo.png';
import el1 from '../public/Ellipse 1.png'
import el2 from '../public/Ellipse 2.png'
import el3 from '../public/Ellipse 3.png'
import styles from '../styles/styles.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useSession, signOut, signIn, signUp } from 'next-auth/react';

export default function Home(){
  const { data: session } = useSession();
    return (
      <div className={styles.upperbody}>
        {/* NAVBAR  */}
        <nav className={styles.navbar} id="navbar">
          <Image className={styles.logo} src={logo} alt="Logo" />
          <ul className={styles.ull} style={{listStyleType: 'none'}}>
            <li className={`${styles.nav1} ${styles.nav2}`} style={{color: 'white'}}><a href="#browse" style={{color: 'inherit', fontStyle: 'normal', textDecoration: 'none'}}>Browse</a></li>
            <li className={`${styles.nav1} ${styles.nav2}`} style={{color: 'white'}}>About Us</li>
            <li className={`${styles.nav1} ${styles.nav2}`} style={{color: 'white'}}>Contact</li>
            {!session?<li className={styles.nav1}><span><Link href="/newlogin" target='_blank' className={styles.nav3}>Log In</Link></span> | <span className={styles.nav3}><Link href="/newsignup" target='_blank' className={styles.nav3}>Sign Up</Link></span> </li>:<li className={styles.nav1}><span>Hi</span> <Link href={'/myacc'} className={styles.nav2}>{session.user.username}</Link> | <Link href={'/'} onClick={() => signOut()} className={styles.nav3}>Sign Out</Link></li>}
          </ul>
        </nav>
        {/* HERO SECTION  */}
        <section className={styles.hero}>
          <div className={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore adipisci ullam sequi aperiam perferendis quas, quaerat aspernatur architecto, molestias numquam cum perspiciatis esse excepturi vitae aliquid odio doloribus nihil.</div>
          <Image className={styles.el1} src={el1} alt="Ellipse1" />
          <Image className={styles.el2} src={el2} alt="Ellipse2" />
          <Image className={styles.el3} src={el3} alt="Ellipse3" />
        </section>
        {/* SEARCH SECTION  */}
        <section className={styles.search} id="browse">
          <input className={styles.searchbar} type="text" placeholder="Hotels, Places, Landmarks etc" />
        </section>
        {/* <section class="contact">
        <h1 style="margin-left: 0;">Contact Us</h1>
        <p style="padding-top: 1%;">abc@gmail.com</p>
        <p style="padding-top: 1%;">1234567890</p>
        <p style="padding-top: 1%;">B203, Bhaskaracharya building,</p>
        <p>K J Somaiya College of Engineering,</p>
        <p>Somaiya Vidyaviahar University,</p>
        <p>Vidyavihar East, Mumbai</p>
        <p>Maharashtra - 400077.</p>
    </section> */}
    <style jsx global>{`
    html, body {
      overflow-x: hidden;
      position: relative;
    }
    `}</style>
      </div>
    );
  }
{/* <styles */}
