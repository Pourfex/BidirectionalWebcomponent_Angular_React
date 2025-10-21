import React from 'react';
import componentImage from './image.png';

const ReactGreeting = ({ message, onSendImage }) => {
  const handleSendImage = () => {
    onSendImage(componentImage);
  };

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

      <div style={{ marginTop: '20px' }}>
        <img 
          src={componentImage} 
          alt="Component" 
          style={{ 
            width: '100px', 
            height: 'auto',
            borderRadius: '8px',
            display: 'block',
            margin: '0 auto 10px'
          }} 
        />
        <button
          onClick={handleSendImage}
          style={{
            padding: '10px 20px',
            backgroundColor: '#20232a',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          Send to Main App
        </button>
      </div>
    </div>
  );
};

export default ReactGreeting;

