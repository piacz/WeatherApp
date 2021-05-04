import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

import { Link } from 'react-router-dom';

//CLASES
export default class Nav extends React.Component{
  constructor(props){
    super(props);
    //no tiene state
  }

  render(){
    return(
      <nav className="navbar navbar-light bg-light">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Henry - Weather App
        </span>
      </Link>
      <Link to='/about'>
        <span>About</span>
      </Link>
        <SearchBar
          onSearch={this.props.onSearch}
        />
    </nav>
    )
  }  
}


//FUNCION

// function Nav({onSearch}) {
//   return (
//     <nav className="navbar navbar-light bg-light">
//       <Link to='/'>
//         <span className="navbar-brand">
//           <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
//           Henry - Weather App
//         </span>
//       </Link>
//       <Link to='/about'>
//         <span>About</span>
//       </Link>
//         <SearchBar
//           onSearch={onSearch}
//         />
//     </nav>
//   );
// };



// export default Nav;
