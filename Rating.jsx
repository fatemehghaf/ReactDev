import React, { useState } from 'react'

export default function Rating() {
    const [value,setValue]= useState(-1);
    const [preValue, setPreValue]=useState(0);

    const unfilledStar = <>&#9734;</>
    const filledStar = <>&#9733;</>

    const handleClick= (newValue) => {
        setValue(newValue);
        setPreValue(newValue);
    };

    

  return (
    <div style={{fontSize:80}} >
        {Array(5).fill(0).map((_,num) => (
            <span
                key={num}
                onMouseOver={() => {setPreValue(-1); setValue(num)}}
                onMouseOut={() => value>=num ? setValue(-1) : setValue(0)}
                onClick={() => handleClick(num)}
                style={{cursor:'pointer', color: value >= num
                    || preValue >=num ? "yellow" : "grey"}}
            >
                {value >= num  ? filledStar : unfilledStar}
            </span>
        ))}
      
    </div>
  )
}
