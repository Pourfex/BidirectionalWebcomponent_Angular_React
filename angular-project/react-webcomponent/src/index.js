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

  handleSendImage(imageData) {
    // Emit a custom event with the image data
    const event = new CustomEvent('image-sent', {
      detail: { imageUrl: imageData },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  render() {
    if (this._root) {
      const message = this.getAttribute('message');
      this._root.render(
        <ReactGreeting 
          message={message} 
          onSendImage={(imageData) => this.handleSendImage(imageData)}
        />
      );
    }
  }
}

customElements.define('react-greeting', ReactGreetingElement);

