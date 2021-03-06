import React from 'react';
import './Card.css';

import { Link } from 'react-router-dom';

export default class Card extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="card">
      <div id="closeIcon" className="row">
          <button onClick={this.props.onClose} className="btn btn-sm btn-danger">X</button>
      </div>
        <Link to={`/ciudad/${this.props.id}`} >
          <h5 className="card-title">{this.props.name}</h5>
        </Link>
      <div className="card-body">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Min</p>
            <p className='temps'>{this.props.min/10}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Max</p>
            <p className='temps'>{this.props.max/10}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+this.props.img+"@2x.png"} width="80" height="80" alt="" />
          </div>
        </div>
      </div>
    </div>
    )
  }
}



// export default function Card ({min, max, name, img, onClose, id}) {
//     return (
//       <div className="card">
//         <div id="closeIcon" className="row">
//             <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
//         </div>
//           <Link to={`/ciudad/${id}`} >
//             <h5 className="card-title">{name}</h5>
//           </Link>
//         <div className="card-body">
//           {/* <h5 className="card-title">{name}</h5> */}
//           <div className="row">
//             <div className="col-sm-4 col-md-4 col-lg-4">
//               <p>Min</p>
//               <p className='temps'>{min/10}°</p>
//             </div>
//             <div className="col-sm-4 col-md-4 col-lg-4">
//               <p>Max</p>
//               <p className='temps'>{max/10}°</p>
//             </div>
//             <div className="col-sm-4 col-md-4 col-lg-4">
//               <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// };
