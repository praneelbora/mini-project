import Image from 'next/image'; 
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import Profile from '../public/Bg_1.png'
import Dashboard from '../Components/Dashboard';
import main from '../styles/main.module.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession, getSession, signOut, signIn, signUp } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';

async function updateProfile(id,img) {
    const response = await fetch('/api/updateProfile', {
      method: 'POST',
      body: JSON.stringify({ id, img }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }
  
    return data;
  }

export default function MyAcc(){
    const [isLoading, setIsLoading] = useState(true);
    const [imageSrc, setImageSrc] = useState();
    const [uploadData, setUploadData] = useState();
    const router = useRouter();
    // check if logged in and redirect to login page if so
    const { data: session } = useSession();
    useEffect(() => {
        getSession().then((sess) => {
            if(!sess){
                router.replace('/');
            } else {
                setIsLoading(false);
            }
        })
    });


    function handleOnChange(changeEvent) {
        const reader = new FileReader();

        reader.onload = function(onLoadEvent) {
            setImageSrc(onLoadEvent.target.result);
            setUploadData(undefined);
        }

        reader.readAsDataURL(changeEvent.target.files[0]);
    }

    // const reloadSession = () => {
    //   const event = new Event("visibilitychange");
    //   document.dispatchEvent(event);
    // };

    async function handleOnSubmit(event) {
        event.preventDefault();
    
        const form = event.currentTarget;
        const fileInput = Array.from(form.elements).find(({ name }) => name === 'file');
    
        const formData = new FormData();
    
        for ( const file of fileInput.files ) {
          formData.append('file', file);
        }
    
        formData.append('upload_preset', 'profilePics');
    
        const data = await fetch('https://api.cloudinary.com/v1_1/dkslaee8q/image/upload', {
          method: 'POST',
          body: formData
        }).then(r => r.json());
    
        setImageSrc(data.secure_url);
        setUploadData(data);

        try {
            console.log(data)
            const result = await updateProfile(session?.user?._id, data.secure_url);
            console.log(success);
            //reloadSession();
          } catch (error) {
            console.log(error)
          }
      }
    
    if (isLoading) {
        return <p>Loading...</p>;
    }

    return(
        <>
            <Dashboard profileImg={session?.user?.profilePic}></Dashboard>
            <div className={main.main}>
            <Image className={main.dp} src={session?.user?.profilePic} alt='Profile Image' width={500} height={500} style={{borderRadius:'50%'}}/>
                {/* USER NAME & USERNAME -- BACKEND CONNECTION */}
                <br/>
                <br/>
                <div className={main.details}>
                    {session?.user?.fname}
                    <br/>
                    @{session?.user?.username}
                    <br/>
                    <button onClick={() => signOut()} className={main.sout}>Sign Out</button>
                </div>
                <form method="post" onChange={handleOnChange} onSubmit={handleOnSubmit} className={main.form}>
                <label for="file" className="form-label">Change your profile Pic:</label>
                <input className="form-control" type="file" id="file" name='file' />
                {imageSrc && !uploadData && (
                    <p>
                    <button>Upload Files</button>
                    </p>
                )}

                {uploadData && (
                    <code><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>
                )}
                </form>
            </div>
        </>

    );
    }

