import React from 'react';
import sleeping from '../../../images/sleeping.jpeg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-centre'>Mechanic is on rest.</h2>
             <img src={sleeping} alt=''/>
        </div>
    );
};

export default NotFound;