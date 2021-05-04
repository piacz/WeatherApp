import React, { Component } from "react";

export default class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      city:""
    }
    this.clearInput=this.clearInput.bind(this);
  }
  
  change(target){
    this.setState({city:target});
  }

  clearInput(){
   this.setState({city:''});
  }
 

  render(){
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.onSearch(this.state.city);
        this.clearInput()
      }}>
        <input
          type="text"
          placeholder="Ciudad..."
          value={this.state.city}
          onChange={e => this.change(e.target.value)}
        />
        <input type="submit" value="Agregar" />
      </form>
    );
  }
}




// import React, { useState } from "react";
// import './SearchBar.css';

// export default function SearchBar({onSearch}) {
//   const [city, setCity] = useState("");//estado de la searchbar
  
//   function clearInput(){
//     setCity('');
//   }
  
//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       onSearch(city);//onsearchea el estado city que es el input
//       clearInput();

//     }}>
//       <input id='input'
//         type="text"
//         placeholder="Ciudad..."
//         value={city}
//         onChange={e => setCity(e.target.value)}//setea el valor del input como estado city
//       />
//       <input type="submit" value="Agregar"  className="btn btn-outline-primary" />
//     </form>
//   );
// }
