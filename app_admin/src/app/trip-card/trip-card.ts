import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../services/authentication';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css',
})
export class TripCard {

  @Input() trip: any;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  editTrip(): void {
    localStorage.setItem('selectedTrip', JSON.stringify(this.trip));
    this.router.navigate(['/edit-trip']);
  }

  deleteTrip(): void {
    if (confirm(`Are you sure you want to delete ${this.trip.name}?`)) {
      console.log('delete', this.trip.code);
    }
  }

}