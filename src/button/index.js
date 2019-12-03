import React from 'react';

const styles = {
  padding: '20px',
}

const Button = ({ value, className }) => {
  return (
    <button className={className} style={styles}>{value}</button>
  );
}

export default Button;
