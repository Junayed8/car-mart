import React from 'react';

const Footer = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
      };
    return (
        <footer className='mt-2 p-5'>
            <p className='text-center'><small className='mt-15px'>copyright by Junayed Sakib <span>&copy;</span> {getCurrentYear()} </small></p>
        </footer>
    );
};

export default Footer;