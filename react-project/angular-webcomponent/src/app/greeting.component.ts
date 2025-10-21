import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
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
    </div>
  `,
  styles: []
})
export class GreetingComponent {}

