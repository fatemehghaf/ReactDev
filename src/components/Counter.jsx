import React, { useState } from 'react';
import './general.css'

export default function Counter() {
    const [num, setNum] = useState(0);
  return (

      <div>
        
        <button className="btn" onClick={() => setNum(num +- 1)}>-1</button>
        <button className="btn" onClick={() => setNum(num + 1)}>+1</button>
        <p>Count: {num} </p>
        <button className="btn" onClick={() => setNum(num + 5)}>+5</button>
        <button className="btn" onClick={() => setNum(num - 5)}>-5</button>
      </div>

  )
}