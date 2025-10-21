import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGreeting from './ReactGreeting';

class ReactGreetingElement extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    
    const root = ReactDOM.createRoot(mountPoint);
    root.render(<ReactGreeting />);
  }
}

customElements.define('react-greeting', ReactGreetingElement);

