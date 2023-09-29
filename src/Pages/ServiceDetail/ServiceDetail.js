import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}= useParams();
    return (
        <div className='text-center'>
            <h2>Welcome to detail:{serviceId}</h2>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Proceed checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;