import PageBullet from "./PageBullet";
import seatransportlogo from "../src/seatransport.svg";
import airtransportlogo from "../src/airtransport.svg";
import warehousinglogo from "../src/warehousing.svg";
import localshippinglogo from "../src/localshipping.svg";


function Sec2(){

    return(
        <div className="section2-container">
            <div class="section2-content-holder">
                <div className="section2-content-holder-left">
             <PageBullet text="What We Do"/>
             <h2>Safe & Reliable Cargo Solutions</h2>
                </div>
                  


                <div className="section2-content-holder-right">
                    <div className="rect-card">
                        <div className="rect-card-left">
                        <img src={seatransportlogo} alt="seatransportlogo"/>
                        </div>
                        <div className="rect-card-right" >
                            <h3>Sea Transport Services</h3>
                            <p>
                            Following the quality of our service thus having gained trust of our many clients.
                            </p>
                        </div>
                    </div>

                    <div className="rect-card">
                        <div className="rect-card-left">
                        <img src={warehousinglogo} alt="warehousinglogo"/>
                        </div>
                        <div className="rect-card-right">
                            <h3>Warehousing Services</h3>
                            <p>
                            Following the quality of our service thus having gained trust of our many clients.
                            </p>
                        </div>
                    </div>

                    <div className="rect-card">
                        <div className="rect-card-left">
                        <img src={airtransportlogo} alt="airtransportlogo"/>
                        </div>
                        <div className="rect-card-right">
                            <h3>Air Fright Services</h3>
                            <p>
                            Following the quality of our service thus having gained trust of our many clients.
                            </p>
                        </div>
                    </div>

                    <div className="rect-card">
                        <div className="rect-card-left">
                        <img src={localshippinglogo} alt="localshippinglogo"/>
                        </div>
                        <div className="rect-card-right">
                            <h3>Local Shipping Services</h3>
                            <p>
                            Following the quality of our service thus having gained trust of our many clients.
                            </p>
                        </div>
                    </div>
                    



                </div>


                    
            </div>

        </div>
                    

    );


}
export default Sec2;