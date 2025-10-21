import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const webComponentRef = useRef(null);

  useEffect(() => {
    if (webComponentRef.current) {
      webComponentRef.current.setAttribute('message', message);
    }
  }, [message]);

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
      </div>
      
      <div className="card">
        <h2>Angular Web Component Demo</h2>
        <angular-greeting ref={webComponentRef}></angular-greeting>
      </div>
    </div>
  );
}

export default App;

