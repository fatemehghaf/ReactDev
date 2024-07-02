import React from 'react';
import ReactDOM from 'react-dom/client';
import image from '../src/Img/Max.jpg';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
  <h1>Hello My Name if Fatemeh Ghafouri!</h1>
  <img src={image} alt="" height='300' className="imgStyle"/>
</div>
);


