import Image from 'next/image'; 
import logo from '../public/logo.png'
import Link from 'next/link';
import styles from './CSS/dash.module.css';
import { useState, useEffect } from 'react';


export default function Dashboard({ profileImg })
{
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

    return(
      <div className={styles.upperbody}>
      
      <nav className= {`navbar navbar-expand-lg ${styles.navbar}`} style={{background: "#35A24E"}}>
      <div className="container-fluid">
        <Link className="ms-3" href="/"><Image className={styles.logo1} src={logo} alt='Logo'/></Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon"> */}
          <Image className= {`navbar-toggler-icon ${styles.profile}`} src={profileImg} alt="Profile Image" width={500} height={500} style={{borderRadius:'50%'}}/>
          {/* </span> */}
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`${styles.ull} navbar-nav ms-auto mb-2 mb-lg-0 me-3`}>
          <li className="nav-item mx-2">
              <Link className="nav-link active" aria-current="page" href='/myacc'>My Account</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active" aria-current="page" href='/myreviews'>My Reviews</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active" aria-current="page" href="/writereview">Write Review</Link>                  
            </li> 
            <li className="nav-item mx-2">
              <Link className="nav-link active" aria-current="page" href="/search">Browse</Link>                  
            </li>

            
          </ul>
          <Link href='/myacc'><Image className={styles.profile1} src={profileImg} alt="Profile Image" width={500} height={500} style={{borderRadius:'50%'}}/></Link>

        </div>
      </div>
    </nav>

        {/* <nav className={styles.navbar} id="navbar">
          <Link href='/'><Image className={styles.logo} src={logo} alt="Logo" /></Link>
          <ul className={styles.ull} style={{listStyleType: 'none'}}>
            <li className={styles.nav}><Link href='/myreviews' className={styles.nav3}>My Reviews</Link></li>
            <li className={styles.nav}><Link href='/writereview' className={styles.nav3}>Write Review</Link></li>
            <li className={styles.nav}><Link href='/search' className={styles.nav3}>Browse</Link></li>
            <Link href='/myacc'><Image className= {styles.profile} src={profileImg} alt="Profile Image" width={500} height={500} style={{borderRadius:'50%'}}/></Link> 
          </ul>
            </nav> */}
            <style jsx global>{`
    body {
      overflow-x: hidden;
      position: relative;
    }
    `}</style>
        </div>
        
    );
}