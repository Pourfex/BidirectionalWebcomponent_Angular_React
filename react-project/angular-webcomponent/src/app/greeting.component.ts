import { Component, Input } from '@angular/core';
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
    </div>
  `,
  styles: []
})
export class GreetingComponent {
  @Input() message: string = '';
}

