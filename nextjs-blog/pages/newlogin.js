import { useRef, useState, useEffect } from 'react';
import { getSession } from 'next-auth/react';
import { signIn } from 'next-auth/react';
//document.body.style.overflow = "hidden";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/form.module.css';
import Background2 from '../Components/bg2';
import { redirect } from 'next/dist/server/api-utils';

import { useRouter } from 'next/router';

// This gets handled by the [...nextauth] endpoint
function LogInForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  // check if logged in and redirect to home page if so
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.back()
      } else {
        setIsLoading(false);
      }
    });
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value.trimEnd();
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation here
      await signIn('credentials', {
        // redirect: '/',
        username: enteredUsername,
        password: enteredPassword,
      });

  }
    return (
        <div className={styles.body}>
          <span className={styles.primarybox}>
            <div className={styles.form}>
              <h2 style={{textAlign: 'center'}}>Log In</h2>
              {/* <div className={styles.form} /> */}
              <div className={styles.inner}>
                <form onSubmit={submitHandler}>
                  {/* USERNAME */}
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="username" placeholder="johnwick" required ref={usernameInputRef}/>
                    <label htmlFor="username">Username</label>
                  </div>
                  {/* PASSWORD  */}
                  <div className="form-floating mb-2">
                    <input type="password" className="form-control" id="pass" placeholder="Password" required ref={passwordInputRef}/>
                    <label htmlFor="pass">Password</label>
                  </div>
                  {/* FORGOT PASSWORD  */}
                  <div style={{width: '100%', textAlign: 'right'}}><Link className={styles.next} href="/forgot">Forgot Password</Link>
                  </div>
                  {/* LOGIN BUTTON  */}
                  <div style={{textAlign: 'center'}}>
                    <button className="btn btn-outline-success">Log In</button>
                  </div>
                  {/* SIGNUP BUTTON  */}
                  <div style={{width: '100%', textAlign: 'center'}}><Link className={styles.next} href="/newsignup">New? Sign Up here</Link>
                  </div>
                </form>
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

export default LogInForm;