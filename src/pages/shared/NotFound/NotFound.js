import React from 'react';
import sleeping from '../../../images/sleeping404.png'

const NotFound = () => {
    return (
        <div className='text-center'>
            <h2 className='text-primary'>Mecanic sleeping 404</h2>
            <img className='w-50' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;