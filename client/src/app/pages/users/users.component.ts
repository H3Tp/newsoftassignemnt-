import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  template: `
  <div class="p-6">
    <h2 class="text-2xl font-semibold mb-4">Users</h2>
    <p class="text-gray-600">List, create, and manage users here.</p>
  </div>
  `
})
export class UsersComponent {}
