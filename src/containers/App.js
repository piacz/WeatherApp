import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id != id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())//tradice la data a un json legible
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);//setea el estado cities agregandole la city
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id == parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">

      <Route path='/' render={() => <Nav onSearch={onSearch}/> }/>
      <Route path='/about' component={About}/>
        
      { (cities.length>0 &&
        <Route
          exact path='/ciudad/:ciudadId'//--le llega el objeto de la ciudad completa 
          render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}//props.match
        />)||
       <Redirect to='/'/> 
      } 
      <Route exact path='/'
        render={() =>
          <div>
            <Cards
              cities={cities}
              onClose={onClose}
            />
          </div>}
      />
      
    </div>

  );
}

export default App;
