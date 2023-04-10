//document.body.style.overflow = "hidden";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/form.module.css';
import Background2 from '../Components/bg2';

export default function Login(){
      return (
        <div className={styles.body}>
          <span className={styles.primarybox}>
            <div className={styles.form}>
              <h2 style={{textAlign: 'center'}}>Log In</h2>
              <div className={styles.form} />
              <div className={styles.inner}>
                <form action>
                  {/* USERNAME */}
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="username" placeholder="johnwick" required />
                    <label htmlFor="username">Username</label>
                  </div>
                  {/* PASSWORD  */}
                  <div className="form-floating mb-2">
                    <input type="password" className="form-control" id="pass" placeholder="Password" required />
                    <label htmlFor="pass">Password</label>
                  </div>
                  {/* FORGOT PASSWORD  */}
                  <div style={{width: '100%', textAlign: 'right'}}><Link className={styles.next} href="/forgot">Forgot Password</Link>
                  </div>
                  {/* LOGIN BUTTON  */}
                  <div style={{textAlign: 'center'}}>
                    <input className="btn btn-outline-success" type="submit" value="Log In" />
                    <Link href="/myacc"> LOGIN</Link>
                  </div>
                  {/* SIGNUP BUTTON  */}
                  <div style={{width: '100%', textAlign: 'center'}}><Link className={styles.next} href="/signup">New? Sign Up here</Link>
                  </div></form>
              </div>  
            </div>
          </span>
          <Background2></Background2>
          <style jsx global>{`
          body{
            overflow: hidden;
            position: relative;
          }`}</style>
        </div>
    );
}
