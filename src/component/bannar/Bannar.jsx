import React, { useContext } from 'react';
import './Bannar.css'

const Bannar = ({title}) => {
    

    return (
        <div>
            <div id='background' className='bg-dark'>      
            <h1 className='text-light'>{title}</h1>
            
       </div>
        </div>
    );
};

export default Bannar;