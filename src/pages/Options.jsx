import { SketchPicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { setBorderColor, setTextColor, setBgColor } from '../store/slices/colorSlice';
import { useState } from 'react';
import {ColorBtn} from './components/Style';
import { setTheme } from '../store/slices/themeSlice';


export default function Options() {
const dispatch = useDispatch();
const { textColor, borderColor, bgColor} = useSelector((state) => state.colors);
const { currentTheme, themes } = useSelector(state => state.theme);
const theme = themes[currentTheme];


const [showTextColorPicker, setShowTextColorPicker] = useState(false);
const [showBorderColorPicker, setShowBorderColorPicker] = useState(false);
const [showBgColorPicker, setShowBgColorPicker] = useState(false);

const handleTextColorChange = (color) => {
  dispatch(setTextColor(color.hex));
};

const handleBorderColorChange = (color) => {
  dispatch(setBorderColor(color.hex));
}

const handleBgColorChange = (color) => {
  dispatch(setBgColor(color.hex));
}

const handleChangeThemeDark = () => {
  dispatch(setTheme('dark'));
};

const handleChangeThemeLight = () => {
  dispatch(setTheme('light'));
};

const handleChangeThemeSolarized = () => {
  dispatch(setTheme('solarized'));
};




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
    
      <p>Border Color:
      <ColorBtn style={{backgroundColor:borderColor, cursor:'pointer', width:45}}
    onClick={() => setShowBorderColorPicker(!showBorderColorPicker)} 
    ></ColorBtn>
    {showBorderColorPicker && (
      <SketchPicker color={borderColor} onChangeComplete={handleBorderColorChange} />
    )}
    </p>

    <p>Background Color:
      <ColorBtn style={{backgroundColor:bgColor, cursor:'pointer', width:45}}
    onClick={() => setShowBgColorPicker(!showBgColorPicker)} 
    ></ColorBtn>
    {showBgColorPicker && (
      <SketchPicker color={bgColor} onChangeComplete={handleBgColorChange} />
    )}
    </p>

    <p>
    <button onClick={handleChangeThemeLight}>Light Theme</button>
    <button onClick={handleChangeThemeDark}>Dark Theme</button>
    <button onClick={handleChangeThemeSolarized}>Solarized Theme</button>
    </p>
    </div>
  )
}
