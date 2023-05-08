import Image from 'next/image'; 
import Link from 'next/link';
import styles from './CSS/background2.module.css';
import Bg_2 from '../public/Bg_2.png';
import logo from '../public/logo.png'
import { useRouter } from 'next/router';
export default function Background2(){
    const router = useRouter();
    return(
        <>
        <Image className={styles.logo} src={logo} alt="Logo" onClick={()=>router.replace('/')} />
        <span className={styles.box}>
            <Image className={styles.bg2} src={Bg_2} alt="Background Image" />
          </span>
        </>
    );
}