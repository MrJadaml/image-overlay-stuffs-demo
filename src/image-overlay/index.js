import React from 'react';
import Image from './image';
import './image-overlay.css';

const ImageOverlay = ({ children, imageProps }) => {
  return (
    <div className="image-overlay" >
      <Image className="image" {...imageProps} />

      <div className="overlay">
        {children.map(child => {
          const nextProps = {
            ...child.props,
            className: child.props.position,
          }

          const clonedChild = React.cloneElement(child, nextProps);

          return clonedChild;
        })}
      </div>
    </div>
  );
}

export default ImageOverlay;

