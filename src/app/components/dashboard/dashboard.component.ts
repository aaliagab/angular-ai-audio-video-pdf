import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  title = 'Dashboard';
  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }
}
