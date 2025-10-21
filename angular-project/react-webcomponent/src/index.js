import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGreeting from './ReactGreeting';

class ReactGreetingElement extends HTMLElement {
  static get observedAttributes() {
    return ['message'];
  }

  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    
    this._root = ReactDOM.createRoot(mountPoint);
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    if (this._root) {
      const message = this.getAttribute('message');
      this._root.render(<ReactGreeting message={message} />);
    }
  }
}

customElements.define('react-greeting', ReactGreetingElement);

