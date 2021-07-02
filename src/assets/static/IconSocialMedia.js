import React, { Fragment } from 'react';
import '../styles/Icons.css';

const IconSocialMedia = ({socialMedia, uri, color, form}) => {

    return (
        <a alt ={socialMedia} onClick={() => window.open(`${uri}`)}>
            <svg className="o-svg">
                <g  transform="scale(1.3)">
                    { socialMedia == 'Instagram' ?
                        <Fragment>
                            <path d="M17.581,5.467a.953.953,0,1,0,.952.952A.954.954,0,0,0,17.581,5.467Z" fill={color} ></path>
                            <path d="M12,7.073A4.927,4.927,0,1,0,16.927,12,4.932,4.932,0,0,0,12,7.073Zm0,8.854A3.927,3.927,0,1,1,15.927,12,3.932,3.932,0,0,1,12,15.927Z" fill={color} ></path>
                        </Fragment>
                        :
                        null
                    }
                    <path d={form} fill={color} ></path>
                </g>
            </svg>
        </a>
    );
}

export default IconSocialMedia;