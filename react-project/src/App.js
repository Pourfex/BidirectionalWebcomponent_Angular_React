import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [receivedImageUrl, setReceivedImageUrl] = useState('');
  const webComponentRef = useRef(null);

  useEffect(() => {
    if (webComponentRef.current) {
      webComponentRef.current.setAttribute('message', message);
    }
  }, [message]);

  useEffect(() => {
    const handleImageSent = (event) => {
      setReceivedImageUrl(event.detail);
    };

    const element = webComponentRef.current;
    if (element) {
      element.addEventListener('imageSent', handleImageSent);
    }

    return () => {
      if (element) {
        element.removeEventListener('imageSent', handleImageSent);
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>Hello by React</h1>
        <p>This is the main React application.</p>
        
        <div style={{ marginTop: '20px' }}>
          <label htmlFor="messageInput" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Send message to Angular Web Component:
          </label>
          <input 
            id="messageInput"
            type="text" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            style={{ 
              width: '100%', 
              padding: '10px', 
              fontSize: '14px', 
              border: '2px solid #ddd', 
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {receivedImageUrl && (
          <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0 }}>Image sent from WebComponent</h3>
            <img 
              src={receivedImageUrl} 
              alt="Received from web component" 
              style={{ width: '150px', height: 'auto', borderRadius: '8px' }} 
            />
          </div>
        )}
      </div>
      
      <div className="card">
        <h2>Angular Web Component Demo</h2>
        <angular-greeting ref={webComponentRef}></angular-greeting>
      </div>
    </div>
  );
}

export default App;

