import React from 'react';
import './Country.css'

const Country = (props) => {
const { name, flag, capital,  region, population} =props.country;
    return (
        <div className="country">
            <h3>Country Name : {name}</h3>
            <img src={flag} alt="" />
            <h4>Our Capital : {capital}</h4>
            <h4>Our Language : {props.country.languages[0].name} </h4>
            <h4>Our Region : {region}</h4>
            <h4>Our Population : {population}</h4>
            <button>Details</button>
        </div>
    );
};

export default Country;