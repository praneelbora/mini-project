import Image from 'next/image'; 
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import view from './CSS/view.module.css';
import Placeholder from '../public/Bg_1.png'
import Head from 'next/head';
import LinesEllipsis from 'react-lines-ellipsis'


export default function VReview({ dashImg, title, reviewer, desc, rating, eagleScore, country, city, upvotes, createdAt })
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
        // <div classNameName={view.box}>
            <div className="col-lg-4 col-md-6 col-sm-12 pb-5">
                <div className="card" style={{'maxHeight':'625px'}}>
                    <Image src={dashImg} className={`card-img-top ${view.cover}`} alt="..." height={500} width={500}/>
                    <div className="card-body">
                      {/* <h5 className="card-title mb-1">{title}</h5> */}
                      <LinesEllipsis className='h5 card-title mb-1' text={title} maxLine='1' ellipsis='...' trimRight basedOn='letters' />
                      <p className="card-subtitle text-muted mb-2"><b>Reviewer:</b>  @{reviewer}</p>
                      <LinesEllipsis className='card-text' text={desc} maxLine='2' ellipsis='...' trimRight basedOn='letters' />
                      {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item"><b>Rating:</b> {rating}{/*<i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star"></i> <i className="bi bi-star"></i>*/}<span style={{'float':'right'}}><b>EagleScore:</b> {eagleScore}{/*<i className="bi bi-8-circle-fill"></i>*/}</span></li>
                      <li className="list-group-item"><b>Country:</b> {country} <span style={{'float':'right'}}><b>City:</b> {city}</span></li>
                      <li className="list-group-item">
                        <Link href="#" className="card-link btn btn-primary">Read Full Review</Link>
                        <Link href="#" className="card-link btn btn-outline-success mb-n1" style={{'float':'right'}}><span>{upvotes}</span>&nbsp;&nbsp;<i className="bi bi-hand-thumbs-up"></i></Link>
                      </li>
                    </ul>
                    <div className="card-footer" height={10}>
                        <p className='m-0 p-0'>Posted on: {date}</p>
                    </div>
                </div>
            </div>
    );
}