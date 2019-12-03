import React from 'react';

const styles = {
  width: '100%',
  height: '400px',
}

const Image = ({ src, position }) => {
  return (
    <img
      style={styles}
      src={src}
    />
  );
}

export default Image;
