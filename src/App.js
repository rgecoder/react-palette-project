import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalette} from "./colorHelpers";


function App() {
  return (
    <div className="App">
      <Palette {...seedColors[6]}/>
    </div>
  );
}

export default App;
