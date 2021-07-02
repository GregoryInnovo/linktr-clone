import React, { Fragment } from 'react';
import Link from '../components/Link.jsx';
import Person from '../components/Person.jsx';
import Content from '../res/Content.js';
import SocialMedia from '../components/SocialMedia.jsx';
import '../assets/styles/Profile.css';

const Profile = () => {
    const {user, position_1, position_2, position_3} = Content;
    return (
        <Fragment>  
            <div className="o-container">
                <Person email={user.email} occupation={user.occupation} userName={user.userName} />
                <Link nameLink={position_1.nameLink} uri={position_1.uri} />
                <Link nameLink={position_2.nameLink} uri={position_2.uri} />
                <Link nameLink={position_3.nameLink} uri={position_3.uri} />
                <SocialMedia />
            </div>
        </Fragment>
    );
}

export default Profile;