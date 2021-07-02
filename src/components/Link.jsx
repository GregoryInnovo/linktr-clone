import React, { Component, Fragment } from 'react';
import '../assets/styles/Link.css';

export default  class Link extends Component {

    render () {
        const { nameLink, uri } = this.props;
        return (
            <Fragment>
                <div className="o-btn-link">
                    <a onClick={()=> window.open(`${uri}`)}>{nameLink}</a>
                </div>
            </Fragment>
        );
    }
}