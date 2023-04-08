import Card from "./Card";

import image1 from "../src/image1.png";
import image2 from "../src/image2.png";
import image3 from "../src/image3.png";
import image4 from "../src/image4.png";
import image5 from "../src/image5.png";
function Sec5(){

    return(
        <>
        <div className="section5-container1">
          <h2>Transporting Across The World</h2>

        </div>

        <div className="section5-container2">
             <div className="sec5-container2-content-holder">
                <Card bkg={image1} heading="Liquid Transportation" writeup="Premium Tankers" />
                <Card bkg={image2} heading="Packaging Solutions" writeup="Warehouse Management" />
                <Card bkg={image3} heading="Contract Logistics" writeup="Road Transportation" />
                <Card bkg={image4} heading="Warehouse & Distribution" writeup="Large Warehouse" />
                <Card bkg={image5} heading="Specialized Transport" writeup="Ocean Transports" />
                

                
             </div>

        </div>
        
        
        </>
    );
}

export default Sec5;