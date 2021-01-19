import React, {Fragment, useState} from 'react';

function Article(props){
    const [changeTitle, setChangeTitle] = useState(props.titre)
    return(
        <Fragment>
            {
                changeTitle.map((elem) => <h1>{elem.titre}</h1>)
            }
        </Fragment>
    )
};

export default Article;