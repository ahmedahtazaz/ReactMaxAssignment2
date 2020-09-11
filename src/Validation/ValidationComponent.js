import React from 'react';

const Validate = (props) => {
    let validationText = 'Text too short';
    if(props && props.length)
    {
        if(props.length < 5) validationText = 'Text too short';
        else if(props.length > 5) validationText = 'Text too long';
        else validationText = 'Text length is fine';
    }
return (<p>{validationText}</p>);
}

export default Validate;