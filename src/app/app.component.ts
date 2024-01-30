import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {}

  signOut(): void {
    console.log('Logging out');
    this.authService.logout();
    console.log('User signed out');
    this.router.navigate(['/login']);
  }
}
