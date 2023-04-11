import 'bootstrap/dist/css/bootstrap.css';
import Profile from '../public/Profile.png'
import Dashboard from '../Components/Dashboard';
import write from '../styles/write.module.css'
export default function WriteReview(){
    return(
        <>
            <Dashboard img={Profile}></Dashboard>
            <h1 className={write.heading}>Write Review</h1>
            <form className={write.form}>

                {/* TITLE */}
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="Title" placeholder="johnwick" required />
                    <label>Title</label>
                  </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="Title" placeholder="johnwick" required />
                    <label>Description</label>
                  </div>                
                
                {/* DOB  */}
                <div className="form-floating mb-3">
                    <input type="date" className="form-control" id="bdate" placeholder="date" required />
                    <label htmlFor="bdate">Date of Birth</label>
                </div>
                {/* COUNTRY */}
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="Title" placeholder="johnwick" required />
                    <label>Country</label>
                  </div>
                {/* CITY */}
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="Title" placeholder="johnwick" required />
                    <label>City</label>
                  </div>
                {/* HOTEL */}
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="Title" placeholder="johnwick" required />
                    <label>Hotel</label>
                  </div>
                  <>
                <label className='col-md-2'>Rating</label>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                <label class="form-check-label" for="inlineRadio1">1</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">2</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">3</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">4</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">5</label>
                </div>
                
               
                </>
                <br/>
                <div style={{textAlign: 'center'}}>          
							<input className="btn btn-outline-success" type="submit" value="Submit" />
						</div>
            </form>
        
        </>
         
    );

}
