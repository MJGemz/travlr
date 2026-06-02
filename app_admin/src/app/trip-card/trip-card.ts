import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css',
})
export class TripCard {

  @Input() trip: any;

  constructor(private router: Router) {}

  editTrip(): void {
    alert('button clicked');
    localStorage.setItem('selectedTrip', JSON.stringify(this.trip));
    this.router.navigate(['/edit-trip']);
  }

}