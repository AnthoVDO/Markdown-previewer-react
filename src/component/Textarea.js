import React from 'react';

const Textarea = ({input, initialText}) => {
    return (
        <div>
        <textarea name="editor" id="editor" cols="30" rows="10" onChange={input} value={initialText}></textarea>
            
        </div>
    );
};

export default Textarea;