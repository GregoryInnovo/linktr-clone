import React from 'react';
import gravatar from '../res/gravatar.js';
import '../assets/styles/Person.css';

const Person = ({email, occupation}) => {
    return (
        <div className="o-profile-container">
            <picture>
                <img className="o-img-profile" src={gravatar(`${email}`)} alt="image profile"/>
            </picture> 
            <p className="o-main-title">{occupation}</p>
        </div>
    );
}

export default Person;