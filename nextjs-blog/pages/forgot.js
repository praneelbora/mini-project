import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/form.module.css';

document.body.style.overflow = "hidden";
import Background2 from '../Components/bg2';

export default function Home(){
	  return (
		<div className={styles.body}>
		  <span className={styles.primarybox}>
			<div className={styles.form}>
			  <h2 style={{textAlign: 'center'}}>Forgot Password</h2>
			  <div className={styles.form} />
			  <div className={styles.inner}>
				<>
				  <div style={{textAlign:'center'}}>Please enter your username or email id</div>
				</>
				<form action>
				  {/* USERNAME */}
				  <div className="form-floating">
					<input type="text" className="form-control" id="username" placeholder="johnwick" required />
					<label htmlFor="username">Username/Email ID</label>
				  </div>
				  
				  <br></br>
				  {/* LOGIN BUTTON  */}
				  <div style={{textAlign: 'center'}}>
					<input className="btn btn-outline-success" type="submit" value="Submit"/>
				  </div>
				  {/* SIGNUP BUTTON  */}
				  <div style={{width: '100%', textAlign: 'center'}}><Link className={styles.next} href="/signup">Sign Up</Link>&nbsp;&nbsp;&nbsp;<Link className={styles.next} href="/login">Log In</Link>
					</div>
				  </form>
			  </div>  
			</div>
		  </span>
		  <Background2></Background2>
		</div>
	);
}
