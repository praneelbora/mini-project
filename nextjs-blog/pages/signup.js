import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';

import styles from '../styles/form.module.css';
import Background2 from '../Components/bg2';
document.body.style.overflow = "hidden";

export default function Home(){
	  return (
		<div className={styles.body}>
		  	<span className={styles.primarybox}>
				<div className={styles.form}>
					<h2 style={{textAlign: 'center'}}>Sign Up</h2>
					<br/>
					<form> 
						{/* FULL NAME */}
						<div className="form-floating mb-3">
							<input type="name" className="form-control" id="name" placeholder="John Wick" required />
							<label htmlFor="name">Full Name</label>
						</div>

						{/* PHONE NUMBER  */}
						<div className="form-floating mb-3">
							<input type="text" className="form-control" id="username" placeholder="johnwick" required />
							<label htmlFor="username">Username</label>
						</div>

						{/* EMAIL ID */}
						<div className="form-floating mb-3">
							<input type="email" className="form-control" id="email" placeholder="name@example.com" required />
							<label htmlFor="email">Email address</label>
						</div>

						{/* PASSWORD  */}
						<div className="form-floating mb-3">
							<input type="password" className="form-control" id="pass" placeholder="Password" required />
							<label htmlFor="pass">Password</label>
						</div>
						
						{/* DOB  */}
						<div className="form-floating mb-3">
							<input type="date" className="form-control" id="bdate" placeholder="date" required />
							<label htmlFor="bdate">Date of Birth</label>
						</div>
						
						<div style={{textAlign: 'center'}}>          
							<input className="btn btn-outline-success" type="submit" value="Sign Up" />
						</div>

						<div style={{textAlign: 'center'}}>
						<Link className={styles.next} href="/login" >Have an account? Sign In here</Link>
						</div>         
					</form>
				</div>
		  	</span>
		  	<Background2></Background2>
		</div>
	);
}
