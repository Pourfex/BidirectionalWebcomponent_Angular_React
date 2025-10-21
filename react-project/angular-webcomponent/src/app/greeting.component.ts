import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="
      padding: 20px;
      background-color: #dd0031;
      color: white;
      border-radius: 8px;
      text-align: center;
      font-family: Arial, sans-serif;
    ">
      <h3 style="margin: 0 0 10px 0;">Hello by Angular-WebComponent</h3>
      <p style="margin: 0;">This is an Angular component exported as a Web Component!</p>
      
      <div *ngIf="message" style="
        margin-top: 15px;
        padding: 10px;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        font-weight: bold;
      ">
        Message from React: {{ message }}
      </div>

      <div style="margin-top: 20px;">
        <img 
          src="assets/image.png" 
          alt="Component" 
          style="
            width: 100px;
            height: auto;
            border-radius: 8px;
            display: block;
            margin: 0 auto 10px;
          " 
        />
        <button
          (click)="sendImageToParent()"
          style="
            padding: 10px 20px;
            background-color: white;
            color: #dd0031;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            font-size: 14px;
          "
        >
          Send to Main App
        </button>
      </div>
    </div>
  `,
  styles: []
})
export class GreetingComponent {
  @Input() message: string = '';
  @Output() imageSent = new EventEmitter<string>();

  sendImageToParent() {
    // In a real scenario, we'd send the actual image data
    // For simplicity, we'll send the path
    this.imageSent.emit('assets/image.png');
  }
}

