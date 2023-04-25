import Image from 'next/image'; 
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import LinesEllipsis from 'react-lines-ellipsis';
import Im from '../public/Bg_1.png';
import css from '../styles/fr.module.css'
import { useState } from 'react';
export default function VReview({ dashImg, title, reviewer, desc, rating, eagleScore, country, city, upvotes, upvoted, createdAt })
{   
  const [closeState,setCloseState] = useState('bi-x-square text-success');
  const newdate = createdAt
  const date = new Date(createdAt).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });

    async function onClose()
    {
      window.close();
    }
  
    return(
      <>
        <div style={{position:'fixed', right:'2vw', top:'2vh' }} onClick={()=>onClose()} onMouseEnter={()=>setCloseState('bi-x-square-fill text-success')} onMouseLeave={()=>setCloseState('bi-x-square')}>
        <i class={`bi ${closeState}`} style={{fontSize:'50px'}}></i>
              </div>
              <div className={css.box}>
       
       <h1>{title}</h1>
       {/* <p className={css.deets}>@ username</p> */}
       <div className={`${css.deets} mt-3`}>
         {/* <br/> */}
         <Image src={Im} alt="Img" className={css.i} width={500} height={500}></Image>
         {/* <Image src={dashImg} alt="Img" className={css.i}></Image> */}
         <p className="mt-2" > <span style={{float: 'left',marginLeft:'2vw'}}><b>Username: </b>@ username</span><span style={{float: 'right',marginRight:'2vw'}}><b>Date: </b>25-04-2023</span> </p>
         {/* <p className="mt-2" > <span style={{float: 'left',marginLeft:'2vw'}}><b>Username: </b>{reviewer}</span><span style={{float: 'right',marginRight:'2vw'}}><b>Date: </b>{date}</span> </p> */}
         <br/>
         <p className="mt-2" > <span style={{float: 'left',marginLeft:'2vw'}}><b>Rating: </b>4.5</span><span style={{float: 'right',marginRight:'2vw'}}><b>EagleScore: </b> 8</span> </p>
         {/* <p className="mt-2" > <span style={{float: 'left',marginLeft:'2vw'}}><b>Rating: </b>{rating}</span><span style={{float: 'right',marginRight:'2vw'}}><b>EagleScore: </b> {eagleScore}</span> </p> */}
         <br/>
         {/* <p className='mt-2' style={{float: 'left',marginLeft:'2vw'}}><b>Place: </b>{Hotel}, {city}, {country}</p> */}
         <p className='mt-2' style={{float: 'left',marginLeft:'2vw'}}><b>Place: </b>{city}, {country}</p>
         <br/>
         <br/>
         <p>{desc}</p>
       </div>
       </div>
       
      </>
      



    );
}