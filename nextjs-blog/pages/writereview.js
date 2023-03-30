import 'bootstrap/dist/css/bootstrap.css';
import Profile from '../public/Profile.png'
import Dashboard from '../Components/Dashboard';
export default function Home(){
    return(
        <Dashboard img={Profile}></Dashboard>
        
    );

}
