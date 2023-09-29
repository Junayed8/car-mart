import React from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const{id,name, img, description, price}= service;
    const navigate= useNavigate();
    const handleNavigateToServiceDetail=id=>{
            navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img}></img>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>price:${price}</p>
            <button onClick={()=>handleNavigateToServiceDetail(id)} className='btn btn-primary'>Book this service:{name}</button>
        </div>
    );
};

export default Service;