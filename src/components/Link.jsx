import React, { Fragment } from "react";
import "../assets/styles/Link.css";

const Link = ({ nameLink, uri }) => {
    return (
        <Fragment>
            <div className="o-btn-link">
                <span onClick={() => window.open(`${uri}`)}>{nameLink}</span>
            </div>
        </Fragment>
    );
};

export default Link;
