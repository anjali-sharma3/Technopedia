import React from "react";
import {Link} from 'react-router-dom';
function Card(props){
    
    return(
        <>
        
          <div className="home-card">
            <img src={props.imgSrc} alt="img"  className="card-img" />
            <div className="card-info">
              <h3 className="card-title"> {props.imgTitle}</h3>
              <Link to={props.imgLink}>
              <button className="card-btn">Read here</button></Link>
              
            </div>
          </div>
          
      
       
        
        </>

    )
}
export default Card;