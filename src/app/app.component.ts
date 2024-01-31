import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currentRoute: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        let root = this.router.routerState.snapshot.root;
        while (root.firstChild) {
          root = root.firstChild;
        }
        this.currentRoute = root.routeConfig?.path || '';
      });
  }

  getRouteName(route: string): string {
    const routeNames: { [key: string]: string } = {
      login: 'Home',
      listings: 'Listings',
      edit: 'Edit Listings',
    };

    return routeNames[route] || 'Home';
  }

  signOut(): void {
    console.log('Logging out');
    this.authService.logout();
    console.log('User signed out');
    this.router.navigate(['/login']);
  }
}
