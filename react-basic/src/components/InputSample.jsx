import React, { useState } from 'react'

export default function InputSample() {

    const [text, setText] = useState('');
    const [color, setColor] = useState('black');

    const inputText = (e) => {
        setText(e);

        if(e === 'red' || e === 'RED'){
            setColor('red');
        } else {
            setColor('black');
        }
    }

    const deleteText = () => {
        setText('');
        document.querySelector("input").value = '';
    }

    return (
        <div>
            <input type="text" name="text" onChange={(e) => inputText(e.target.value)} />
            <div>
                값: <b style={{color: color}}>{text}</b>
            </div>

            <button onClick={deleteText}>초기화</button>
        </div>
    )
}
