import React from 'react';
import gravatar from '../res/gravatar.js';
import '../assets/styles/Person.css';

const Person = ({email, occupation, userName}) => {
    return (
        <div className="o-profile-container">
            <img className="o-img-profile" src={gravatar(`${email}`)} alt="image profile"/>
            <p className="o-main-name">{userName}</p>
            <p className="o-main-title">{occupation}</p>
        </div>
    );
}

export default Person;