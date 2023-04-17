import Image from 'next/image'; 
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import view from './CSS/view.module.css';
import Placeholder from '../public/Bg_1.png'
import Head from 'next/head';

export default function VReview()
{   const date = new Date("2023-02-17").toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
  
    return(
        // <div classNameName={view.box}>
            <div className="col-3 col-md-4 col-sm-6 mb-5">
                <div className="card" style={{'height':'600px'}}>
                    <Image src={Placeholder} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title mb-1">Europe Tour</h5>
                      <p className="card-subtitle text-muted mb-2">Reviewer: @praneelbora</p>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Rating: &nbsp;<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i className="bi bi-star"></i> <i className="bi bi-star"></i><span style={{'float':'right'}}>EagleScore: <i class="bi bi-8-circle-fill"></i></span></li>
                      <li className="list-group-item"> 2.9 </li>
                      <li className="list-group-item">
                        <Link href="#" className="card-link btn btn-primary">Read Full Review</Link>
                        <Link href="#" className="card-link btn btn-outline-success mb-n1" style={{'float':'right'}}><span>0</span>&nbsp;&nbsp;<i class="bi bi-hand-thumbs-up"></i></Link>
                      </li>
                    </ul>
                    <div className="card-footer">
                        <p className='m-0 p-0'>Posted on: {date}</p>
                    </div>
                </div>
            </div>
    );
}