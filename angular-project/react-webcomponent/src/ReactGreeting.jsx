import React from 'react';

const ReactGreeting = ({ message }) => {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#61dafb',
      color: '#20232a',
      borderRadius: '8px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h3 style={{ margin: '0 0 10px 0' }}>Hello by React-WebComponent</h3>
      <p style={{ margin: 0 }}>This is a React component exported as a Web Component!</p>
      {message && (
        <div style={{
          marginTop: '15px',
          padding: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '4px',
          fontWeight: 'bold'
        }}>
          Message from Angular: {message}
        </div>
      )}
    </div>
  );
};

export default ReactGreeting;

