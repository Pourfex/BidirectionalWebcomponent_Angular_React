import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="container">
      <div class="card">
        <h1>Hello by Angular</h1>
        <p>This is the main Angular application.</p>
      </div>
      
      <div class="card">
        <h2>React Web Component Demo</h2>
        <react-greeting></react-greeting>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-project';
}

