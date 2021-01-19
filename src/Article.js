import React, {Fragment, useState} from 'react';

let Article = (props) => {
    return(
        <Fragment>
            <h1>{props.titre.map((titreInfo) => {return titreInfo})}</h1>
        </Fragment>
    )
};

export default Article;