import React from 'react';

const styles = {
  padding: '20px',
  color: 'white',
}

const Text = ({ title, subtitle, position, className }) => {
  return (
    <div className={className} style={styles}>
      <h3>{title}</h3>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default Text;
