import React from "react";
import './About.css';
import { Link } from 'react-router-dom';

export default function About(){
    return(
        <div className='div'>
            <Link to='/'>
                <button className="btn btn-sm btn-danger">X</button>
            </Link>
            <h1>About Henry Weather:</h1>
            <span>Started in 2020 takes all the data from <a href='https://weather.com/es-AR/tiempo/hoy/l/ARBA0009:1:AR'>theWeatherChannel.com</a> </span>
        </div>
    )
}