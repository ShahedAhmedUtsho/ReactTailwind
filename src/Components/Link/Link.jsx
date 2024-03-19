import React from 'react';
import PropTypes, { object } from 'prop-types'
const Link = ({route}) => {
    return (
        
        
             <li  className='md:mr-8'>
                    <a href={route.path}>{route.name}</a>
            </li>
        
    );
};

Link.propTypes ={
    route:PropTypes.object
}
export default Link;