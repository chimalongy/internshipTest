import PageBullet from "./PageBullet";
import backgroundimg from "../src/background3.png";
import deliverylogo from "../src/deliveryicon.svg";
import travelcostlogo from "../src/optimizedtime.svg";
import descriptionimage from "../src/servicedescriptionimage.svg";
import deliverycounticon from "../src/deliverycounticon.svg"

function Sec4(){
    
    return(
     <>
     <div className="section4-container">
        <div className="section4-content-holder">

            <div className="sec4-content-left">
              <PageBullet text="Why Us"/>
              <h2>
              We provide full range global logistics solution
              </h2>
              <p>
              Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. <br></br><br></br> Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
              </p>

              <div>
                <div className="service-des-holder">
                    <div className="service-des-contents">
                       <div className="service-des">
                        <img src={deliverylogo} alt="icon"/>
                        <h2>Delivery on Time</h2>
                       </div>

                       <div className="service-des">
                        <img src={travelcostlogo} alt="icon"/>
                        <h2>Optimized Travel Cost</h2>
                       </div>

                    </div>
                    <div className="descriptionimagediv">
                        <img src={descriptionimage} alt="img"/>
                    </div>
                   
                    
                </div>
                
              </div>

            </div>
            <div className="sec4-content-right">
            <img src={backgroundimg} alt="backgroundimg"/>
            </div>

           

            

        </div>

       

     </div>

     <div className="sec4-cotainer2">

        <div className="sec4-con2-contentholder">
        <div className="service-count">
                <div className="service-count-left">
                    <div className="delivery-count-left">
                        <h2>1294</h2>
                    </div>
                    <div className="delivery-count-right">
                        <img src={deliverycounticon} />
                        <h3>Delivered Packages</h3>
                    </div>
                </div>



                <div className="service-count-right">
                    <div className="satisfied-client-count-left">
                        <h2>3594</h2>
                    </div>
                    <div className="satisfied-client-count-right">
                        <img src={deliverycounticon} />
                        <h3>Satisfied Clients</h3>
                    </div>
                </div>



             

            </div>


        </div>

     

     </div>
     
     
     </>

    );
}
export default Sec4;