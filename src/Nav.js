import { FaBoxes, FaRegClock, FaMailBulk, FaPhoneAlt } from 'react-icons/fa';



function Nav(){
    return(

        <>
        <div className='nav' id='nav'>
        <div className="nav-container">

            <div className='nav-left'>
                <FaBoxes className='website-logo'/><p className='website-name'>TransitFlow</p>
            </div>
            <div className='nav-right'>

             <div className='nav-icon-container'>
                <div className='nav-icon-holder'>
                    <FaRegClock className='nav-icon'/>
                </div>
                <div className='nav-icontext' >Mon - Sat 9.00 - 18.00 <br></br>Sunday Closed</div>
             </div>

             <div className='nav-icon-container'>
                <div className='nav-icon-holder'>
                    <FaMailBulk className='nav-icon'/>
                </div>
                <div className='nav-icontext'>Email <br></br>contact@logistics.com</div>
             </div>

             <div className='nav-icon-container'>
                <div className='nav-icon-holder'>
                    <FaPhoneAlt  className='nav-icon'/>
                </div>
                <div className='nav-icontext'>Call Us <br></br>(00) 112 365 489</div>
             </div>
             
             

            </div>
            
           
        

        </div>

        </div>
        
        </>
    );
}
export default Nav