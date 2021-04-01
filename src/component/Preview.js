import React from 'react';


const Preview = ({preview}) => {


    return (
        <div id="preview" dangerouslySetInnerHTML={preview}>
            
        </div>
    );
};

export default Preview;