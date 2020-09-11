import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
    let chars = [];
    if(props && props.text)
    {
        const temp = props.text.split('');
        chars = temp.map((char,index) => {
        const key = Math.random();
        return (<p key={key} onClick={() => props.onClick(index)}>{char}</p>);
        });
    }
    return (<div className='CharComponent'>
        {chars}
    </div>);
}

export default CharComponent;