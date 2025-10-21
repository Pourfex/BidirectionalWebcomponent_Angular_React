import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="container">
      <div class="card">
        <h1>Hello by Angular</h1>
        <p>This is the main Angular application.</p>
        
        <div style="margin-top: 20px;">
          <label for="messageInput" style="display: block; margin-bottom: 8px; font-weight: bold;">
            Send message to React Web Component:
          </label>
          <input 
            id="messageInput"
            type="text" 
            [(ngModel)]="messageToWebComponent" 
            placeholder="Type a message..."
            style="width: 100%; padding: 10px; font-size: 14px; border: 2px solid #ddd; border-radius: 4px;"
          />
        </div>
      </div>
      
      <div class="card">
        <h2>React Web Component Demo</h2>
        <react-greeting [attr.message]="messageToWebComponent"></react-greeting>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  messageToWebComponent = '';
}

