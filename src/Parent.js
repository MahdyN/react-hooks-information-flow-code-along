import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState("#FFF")
// (2) We now want to make it so that whenever either of the children components are clicked, we want the clicked child's color to randomly change as well as the other child to that same color, we can't pass states in between children so the color state for the children must be set here, with a callback function that will change this state once a child is clicked

// (1)We want to make it so that whenever a child component is clicked, the state of this parent component will change, this is done by creating a function here and passing this callback function as a prop and adding it as the callback function that a click event will trigger

                                // (2) this callback function must now be altered to include the newChild color that will be randomized in the child component and used as an argument when invoking this function as a callback, both the parent and child colors will be randomized separately this way whenever either child is clicked and their inner states updated
function handleChangeColor(newChildColor) {   // (1) every time one of the child components are clicked, it will trigger this callback function, producing a new random color and using the setter function to change the inner state of color, re-rendering this parent component
  const newRandomColor = getRandomColor()
  setColor(newRandomColor)
  setChildColor(newChildColor)
}

              // (2) the childColor is passed down to the children as a prop from the parent, initially it will be white (#FFF)
  return (     // (1) callback function is passed down to the children components as props to give them access to this parents state
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleChangeColor} color= {childColor}/>
      <Child onChangeColor={handleChangeColor} color= {childColor}/>
    </div>
  );
}

export default Parent;
