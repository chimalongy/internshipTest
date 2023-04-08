
function Card(props){
    return(
      <div className="Card" style={{
        backgroundImage:`url(${props.bkg})`
        
      }}>
        <h2 className="card-heading">{props.heading}</h2>
        <h3 className="card-write-up">{props.writeup}</h3>
          
          
          
        
      </div>

    );
}

export default Card;