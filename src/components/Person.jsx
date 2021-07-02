import React from 'react';
import gravatar from '../res/gravatar';
import '../assets/styles/Person.css';

export default Person = () => {
    return (
        <>
            <picture>
                <img className="o-img-profile" src={gravatar('gregoryinnovo@gmail.com')}/>
            </picture>
        </>
    );
}