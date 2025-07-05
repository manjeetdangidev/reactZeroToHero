import React, { useState } from 'react';
function UseState7_DynamicBackgroundColorPicker() {
    const [bgColor,setBgColor] = useState('#ffffff'); // Default background color is white
    return(
      <div style={{ backgroundColor: bgColor, padding: '2rem', minHeight :'150px', borderRadius: '5px' }}>
      <input type="color"
      value={bgColor}
      onChange={(e) => setBgColor(e.target.value)}
      />
      <p>Selected Color : {bgColor}</p>
      </div>
    )
}
export default UseState7_DynamicBackgroundColorPicker;
