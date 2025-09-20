import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="min-h-screen">
      <router-outlet />
    </div>
  `
})
export class AppComponent {}
