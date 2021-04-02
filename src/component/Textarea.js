import React from 'react';

const Textarea = ({input, initialText}) => {
    return (
        <div className="textarea">
        <textarea name="editor" id="editor" cols="100" rows="10" onChange={input} value={initialText}></textarea>
            
        </div>
    );
};

export default Textarea;