import React, { Fragment } from 'react';
import Link from '../components/Link';
import '../assets/styles/Profile.css';
import LinkContent from '../res/LinkContent';

const Profile = () => {
    const {position_1, position_2, position_3} = LinkContent;
    return (
        <Fragment>  
            <div className="o-link-container">
                <Link nameLink={position_1.nameLink} uri={position_1.uri} />
                <Link nameLink={position_2.nameLink} uri={position_2.uri} />
                <Link nameLink={position_3.nameLink} uri={position_3.uri} />
            </div>
        </Fragment>
    );
}

export default Profile;