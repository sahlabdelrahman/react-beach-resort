import React from 'react';
import { Link } from 'react-router-dom';

export default function Banner ({children, title, subTitle, textOfButton, toOfLink}){
    return(
        <div className='banner'>
            <h1>{title}</h1>
            <div></div>
            <p>{subTitle}</p>
            {children}
            <Link to={toOfLink} className='btn-primary'>{textOfButton}</Link>
        </div>
    );
} 