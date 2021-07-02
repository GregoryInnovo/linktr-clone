import React from 'react';
import IconSocialMedia from '../assets/static/IconSocialMedia.js';
import Content from '../res/Content.js';
import '../assets/styles/SocialMedia.css';

const SocialMedia = () => {
    const { socialMedia } = Content;
    return (
        <div className="o-icon-social-media">
            <IconSocialMedia socialMedia="Twitter" uri={socialMedia.twitter.uri} color="white" form={socialMedia.twitter.iconTwitter}/>
            <IconSocialMedia socialMedia="Instagram" uri={socialMedia.instagram.uri} color="white" form={socialMedia.instagram.iconInstagram}/>
        </div>
    );
}

export default SocialMedia;