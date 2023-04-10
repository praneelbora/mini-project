import Image from 'next/image'; 
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import Profile from '../public/Profile.png'
import Dashboard from '../Components/Dashboard';
export default function Search(){
    return(
        <Dashboard img={Profile}></Dashboard>
        
    );

}
