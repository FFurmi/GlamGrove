import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css'


const ActiveLink = ({to, children}) => {
    return (
        <div>
             <NavLink id='link'
                to={to}
                className={`link  ${({ isActive })=>isActive? 'active':''}`}
            >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;