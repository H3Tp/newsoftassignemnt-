import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
  <div class="min-h-screen grid place-items-center p-6">
    <form (ngSubmit)="submit()" class="w-full max-w-sm bg-white rounded-2xl p-6 shadow">
      <h1 class="text-2xl font-semibold mb-4">Sign in</h1>
      <label class="block mb-2">Username</label>
      <input [(ngModel)]="username" name="username" class="w-full border rounded px-3 py-2 mb-4" />
      <label class="block mb-2">Password</label>
      <input [(ngModel)]="password" name="password" type="password" class="w-full border rounded px-3 py-2 mb-6" />
      <button class="w-full rounded-xl px-4 py-2 bg-sky-500 text-white">Login</button>
    </form>
  </div>
  `
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  username = ''; password = '';
  submit() { if (this.auth.login(this.username, this.password)) this.router.navigateByUrl('/dashboard'); }
}
