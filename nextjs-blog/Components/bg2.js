import Image from 'next/image'; 
import Link from 'next/link';
import bg2 from './CSS/background2.module.css';
import Bg_2 from '../public/Bg_2.png';
import logo from '../public/logo.png'
export default function Background2(){
    return(
        <>
        <span className={bg2.box}>
            <Image className={bg2.bg2} src={Bg_2} alt="Background Image"/>
            <Link href="/"><Image className={bg2.logo} src={logo} alt="Logo"/></Link>
          </span>
        </>
    );
}