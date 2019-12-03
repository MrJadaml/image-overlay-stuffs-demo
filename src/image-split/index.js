import React from 'react';
import Image from '../image';

const ImageSplit = ({ imageProps, children }) => {
  return (
    <div className="image-split" >
      <Image className="image" {...imageProps} />

      <div className="split">
        {children}
      </div>
    </div>
  );
}

export default ImageSplit;
