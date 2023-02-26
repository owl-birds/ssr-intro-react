import React from 'react';
import { renderToString } from "react-dom/server"; 

const Test = () => {
  const react_test = renderToString(
    <h4>HELLO RENDER TO STRING TEST</h4>
  );
  console.log(react_test);
  return (
    <div>Test</div>
  )
}

export default Test
