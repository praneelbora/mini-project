//document.body.style.overflowX = "hidden";
import Image from 'next/image'; 
import Link from 'next/link';
import logo from '../public/logo.png';
import el1 from '../public/Ellipse 1.png'
import el2 from '../public/Ellipse 2.png'
import el3 from '../public/Ellipse 3.png'
import styles from '../styles/styles.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import { useSession, signOut, signIn, signUp } from 'next-auth/react';

export default function Home(){
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparency, setBackgroundTransparency] = useState(0);
  const [linkColor, setLinkColor] = useState('black');

    const handleScroll = () => {
      setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll); 
      return () => window.removeEventListener("scroll", handleScroll);
      });
      useEffect(() => {
        if (clientWindowHeight>10){
            setBackgroundTransparency(100);
            setLinkColor('white');
        }
        if (clientWindowHeight<10){
          setBackgroundTransparency(0);
          setLinkColor('black');
        }
      }, [clientWindowHeight]);
    const { data: session } = useSession();


    return (
      <div className={styles.upperbody}>
       
        <nav className= {`navbar navbar-expand-lg ${styles.navbar}`} style={{background: `rgb(53, 162, 78, ${backgroundTransparency})`}}>
          <div className="container-fluid">
            <Link className="ms-3" href="/"><Image className={styles.logo1} src={logo} alt='Logo'/></Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className={`${styles.ull} navbar-nav ms-auto mb-2 mb-lg-0 me-3`}>
                <li className="nav-item mx-2">
                  <Link className="nav-link active" aria-current="page" href="/opensearch">Browse</Link>
                </li>
                <li className="nav-item mx-2 ">
                  <Link className="nav-link active" aria-current="page" href="#">About Us</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link active" aria-current="page" href="#">Contact</Link>
                </li>
                {!session?<>
                <li className="nav-item mx-2">
                  <Link className="nav-link active" aria-current="page" href="/newlogin" target='_blank'>Log In</Link>                  
                </li> 
                <li className="nav-item mx-2">
                  <Link className="nav-link active" aria-current="page" href="/newsignup"target='_blank'>Sign Up</Link>                  
                </li></>:<>
                <li className="nav-item mx-2">
                  <Link className="nav-link active" aria-current="page" href="/myacc">Hi {session?.user?.username}</Link>                  
                </li> 
                <li className="nav-item mx-2">
                  <Link className="nav-link active" aria-current="page" href={'/'} onClick={() => signOut()}>Sign Out</Link>                  
                </li></>}
                

                
              </ul>
              
            </div>
          </div>
        </nav>


        {/* HERO SECTION  */}
        <section className={styles.hero}>
          <div className={styles.lorem}>THE travel website,<br/> for the travelers,<br/> by the travelers!</div>
          <Image className={styles.el1} src={el1} alt="Ellipse1" />
          <Image className={styles.el2} src={el2} alt="Ellipse2" />
          <Image className={styles.el3} src={el3} alt="Ellipse3" />
        </section>
        {/* SEARCH SECTION  */}
        <section className={styles.search} id="browse">
          <input className={styles.searchbar} type="text" placeholder="Hotels, Places, Landmarks etc" />
        </section>
        
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
