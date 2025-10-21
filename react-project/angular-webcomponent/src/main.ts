import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { GreetingComponent } from './app/greeting.component';

(async () => {
  const app = await createApplication({
    providers: []
  });

  const greetingElement = createCustomElement(GreetingComponent, {
    injector: app.injector
  });

  customElements.define('angular-greeting', greetingElement);
})();

