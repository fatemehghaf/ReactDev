import React, { useState } from 'react';

const Textarea = ({ style, inputLength }) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= inputLength) {
      setText(inputText);
    }
  };

  return (
    <div>
      <textarea
        style={style}
        value={text}
        onChange={handleChange}
        maxLength={inputLength}
      /> 
      <span style={{ color:'grey'}}>{text.length}/{inputLength}</span> 
    </div>
  );
};

export default Textarea;
