import React from 'react';
import './Cards.css';

import Card from './Card.jsx';


//CLASES

export default class Cards extends React.Component{
  constructor(props){
    super(props);  
  }
  render(){
    return(
      <div className='cards'>
      {this.props.cities.map(c => <Card
          id={c.id}
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => this.props.onClose(c.id)}
        /> )}
    </div>
    )
  }
}

//FUNCION

// export default function Cards({cities, onClose}) {
//   return (
//     <div className='cards'>
//       {cities.map(c => <Card
//           id={c.id}
//           key={c.id}
//           max={c.max}
//           min={c.min}
//           name={c.name}
//           img={c.img}
//           onClose={() => onClose(c.id)}
//         /> )}
//     </div>
//   );
// }

