import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {  // (1) We add the passed down callback function as the click event function, this will update the state of the color in the parent company and re-render the parent with a new color
                                    // (2) we are setting the background color of the child to whatever current child color state the parent is passing down
  
  function handleClick() {   // (2) we removed the onChangeColor from the click event in the child and instead added it inside of another callback function that will be invoked when clicked, this way, a random child color will be generated here and passed as an argument into the parent component, the function in there will then randomly generate a color for the parent, changing the state of both but to different colors
    const newChildColor = getRandomColor()
    onChangeColor(newChildColor)
  }
  
return( 
  <div 
  className="child" 
  style={{ backgroundColor: color }}
  onClick = {handleClick}
  />);
}

export default Child;
