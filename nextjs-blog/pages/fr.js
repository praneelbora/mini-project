import Image from 'next/image'; 
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import LinesEllipsis from 'react-lines-ellipsis';
import Im from '../public/Bg_1.png';
import css from '../styles/fr.module.css'
export default function VReview({ dashImg, title, reviewer, desc, rating, eagleScore, country, city, upvotes, upvoted, createdAt })
{   
  const newdate = createdAt
  const date = new Date(createdAt).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
  
    return(
      <div className={css.box}>
      
      <h1>Title Of Review</h1>
      {/* <p className={css.deets}>@ username</p> */}
      <div className={`${css.deets} mt-3`}>
        {/* <br/> */}
        <Image src={Im} alt="Img" className={css.i}></Image>
        <p className="mt-2" > <span style={{float: 'left',marginLeft:'1vw'}}>@ username</span><span style={{float: 'right',marginRight:'1vw'}}>Time</span> </p>
        <br/>


      </div>
      </div>
      



    );
}