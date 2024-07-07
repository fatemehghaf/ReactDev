import { SketchPicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { setBorderColor, setTextColor } from '../store/slices/colorSlice';
import { useState } from 'react';
import {ColorBtn} from './components/Style';


export default function Options() {
const dispatch = useDispatch();
const { textColor, borderColor } = useSelector((state) => state.colors);

const [showTextColorPicker, setShowTextColorPicker] = useState(false);
const [showBorderColorPicker, setShowBorderColorPicker] = useState(false);

const handleTextColorChange = (color) => {
  dispatch(setTextColor(color.hex));
};

const handleBorderColorChange = (color) => {
  dispatch(setBorderColor(color.hex));
}

  return (
    <div>
       <h1>Options</h1>
       This is Options page of admin Panel.
    <p>Text Color:
    <ColorBtn style={{backgroundColor:textColor}}
    onClick={() => setShowTextColorPicker(!showTextColorPicker)} 
    >
    </ColorBtn>
    {showTextColorPicker && (
      <SketchPicker color={textColor} onChangeComplete={handleTextColorChange} />
    )} </p>
    

    
      <p>Text Border:
      <ColorBtn style={{backgroundColor:borderColor, cursor:'pointer', width:45}}
    onClick={() => setShowBorderColorPicker(!showBorderColorPicker)} 
    >
    </ColorBtn>
    {showBorderColorPicker && (
      <SketchPicker color={borderColor} onChangeComplete={handleBorderColorChange} />
    )}
    </p>
    </div>
  )
}
