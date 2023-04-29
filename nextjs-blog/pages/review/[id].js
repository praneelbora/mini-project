import Image from 'next/image'; 
import Link from 'next/link';
import Review from '../../models/review';
import dbConnect from '../../utils/dbConnect';
import 'bootstrap/dist/css/bootstrap.css';
import css from '../../styles/fr.module.css'
import { useRouter } from 'next/router';
import { useState } from 'react';

export async function getServerSideProps(context) {
  // const router = useRouter()
  const rid = context.query.id;
  // console.log(rid)
  dbConnect();
  let review = await Review.findById(rid).populate('userId')
  //   return data;
  return {
      props: {review: JSON.parse(JSON.stringify(review))}
    // props: {review}
    }
}

export default function FReview({ review })
{   
  const [closeState,setCloseState] = useState('bi-x-square text-success');
  // const newdate = createdAt
  const createdate = new Date(review.createdAt).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });

  const traveldate = new Date(review.traveledAt).toLocaleString("en-GB", {
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
        <i className={`bi ${closeState}`} style={{fontSize:'50px'}}></i>
              </div>
              <div className={css.box}>
       
       <h1>{review.title}</h1>
       {/* <p className={css.deets}>@ username</p> */}
       <div className={`${css.deets} mt-3`}>
         {/* <br/> */}
         <Image src={review.dashImg} alt="Img" className={css.i} width={500} height={500}></Image>
         {/* <Image src={dashImg} alt="Img" className={css.i}></Image> */}
         <p className="mt-2" > <span style={{float: 'left',marginLeft:'2vw'}}><b>Username: </b>@{review.userId.username}</span><span style={{float: 'right',marginRight:'2vw'}}><b>Date: </b>{review.travelDate}</span> </p>
         {/* <p className="mt-2" > <span style={{float: 'left',marginLeft:'2vw'}}><b>Username: </b>{reviewer}</span><span style={{float: 'right',marginRight:'2vw'}}><b>Date: </b>{date}</span> </p> */}
         <br/>
         <p className="mt-2" > <span style={{float: 'left',marginLeft:'2vw'}}><b>Rating: </b>{review.rating}</span><span style={{float: 'right',marginRight:'2vw'}}><b>EagleScore: </b>{review.eagleScore}</span> </p>
         {/* <p className="mt-2" > <span style={{float: 'left',marginLeft:'2vw'}}><b>Rating: </b>{rating}</span><span style={{float: 'right',marginRight:'2vw'}}><b>EagleScore: </b> {eagleScore}</span> </p> */}
         <br/>
         {/* <p className='mt-2' style={{float: 'left',marginLeft:'2vw'}}><b>Place: </b>{Hotel}, {city}, {country}</p> */}
         <p className='mt-2' style={{float: 'left',marginLeft:'2vw'}}><b>Place: </b>{review.hotel}, {review.city}, {review.country}</p>
         <br/>
         <br/>
         <p>{review.desc}</p>
       </div>
       </div>
       
      </>
      



    );
}