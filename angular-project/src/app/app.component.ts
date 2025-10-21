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

        <div *ngIf="receivedImageUrl" style="margin-top: 20px; padding: 15px; background-color: #f0f0f0; border-radius: 8px;">
          <h3 style="margin-top: 0;">Image sent from WebComponent</h3>
          <img [src]="receivedImageUrl" alt="Received from web component" style="width: 150px; height: auto; border-radius: 8px;" />
        </div>
      </div>
      
      <div class="card">
        <h2>React Web Component Demo</h2>
        <react-greeting 
          [attr.message]="messageToWebComponent"
          (image-sent)="onImageReceived($event)"
        ></react-greeting>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  messageToWebComponent = '';
  receivedImageUrl = '';

  onImageReceived(event: any) {
    this.receivedImageUrl = event.detail.imageUrl;
  }
}

