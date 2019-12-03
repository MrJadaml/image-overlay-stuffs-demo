import React from 'react';
import logo from './logo.svg';
import ImageOverlay from './image-overlay';
import ImageSplit from './image-split';
import Button from './button';
import Text from './text';
import './App.css';

const imageProps = {
  src: "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555353084/shape/mentalfloss/bob_hed.jpg",
}

function App() {
  return (
    <div className="App">
      <ImageSplit>
        <ImageOverlay imageProps={imageProps} >
          <Text
            title="keep the cozy in."
            subtitle="enjoy the cold outside while the ..."
            position="top-left"
          />

          <Button
            value="shop all camo"
            position="top-right"
          />
        </ImageOverlay>

        <Button />
      </ImageSplit>
    </div>
  );
}

export default App;
