import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  token = signal<string | null>(localStorage.getItem('token'));

  login(username: string, password: string) {
    // demo only – accept anything and set a fake token
    const t = 'demo.jwt.token';
    localStorage.setItem('token', t);
    this.token.set(t);
    return true;
  }

  logout() {
    localStorage.removeItem('token');
    this.token.set(null);
  }

  isAuthed() { return !!this.token(); }
  getToken() { return this.token(); }
}
