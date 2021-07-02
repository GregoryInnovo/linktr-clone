import React, { Fragment } from 'react';
import gravatar from '../res/gravatar.js';
import '../assets/styles/Person.css';

const Person = () => {
    return (
        <div className="o-profile-container">
            <picture>
                <img className="o-img-profile" src={gravatar('gregoryinnovo@gmail.com')}/>
            </picture>
            <p className="o-main-title">Front End Developer</p>
        </div>
    );
}

export default Person;