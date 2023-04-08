import { FaInstagram,FaFacebook,FaTwitter,FaLinkedin } from 'react-icons/fa';
import PageBullet from './PageBullet';

function Sec1(){

    return(
     <>
     <div className="section-container">
     
     <div className="main-menu">
            <div className="menu-holder">
                <div className="menu-holder-left">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Pages</li>
                        <li>Project</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="menu-holder-right">
                      <div className="socials-holder">
                        <ul>
                            <li><FaInstagram/></li>
                            <li><FaFacebook/></li>
                            <li><FaTwitter/></li>
                            <li><FaLinkedin/></li>
                            
                        </ul>
                      </div>
                      <div className="request-quote">
                        Request Quote
                      </div>

                </div>
            </div>
        </div>

        <div className='section-content-container'>
          <div className='section-content-holder'>

            <PageBullet text="Logistics & Supply Chain Solutions"/>

          <div className='website-heading'>
            <h1>
            Your Gateway<br></br> 
            to any Destination<br></br> in the World
            </h1>
            <p className='website-writeup'>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </p>
             <button id='btn-eplore-more'>Eplore More</button>
        </div>
          </div>
        </div>

       
     </div>
     
     </>

    );

}
export default Sec1;