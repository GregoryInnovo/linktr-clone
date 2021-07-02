import React, { Fragment } from "react";
import "../assets/styles/Link.css";

const Link = ({ nameLink, uri }) => {
    return (
        <Fragment>
            <div className="o-btn-link">
                <a onClick={() => window.open(`${uri}`)}>{nameLink}</a>
            </div>
        </Fragment>
    );
};

export default Link;
