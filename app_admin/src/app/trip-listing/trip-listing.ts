import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TripCard } from '../trip-card/trip-card';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, RouterModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
})
export class TripListing implements OnInit {
  trips: any[] = [];
  message: string = '';

  constructor(private tripDataService: TripDataService) {}

  ngOnInit(): void {
    console.log('ngOnInit called');
    this.tripDataService.getTrips().subscribe({
      next: (value: any[]) => {
        console.log('trips received', value);
        this.trips = value;
        this.message = `There are ${value.length} trips available.`;
      },
      error: (err: any) => {
        console.error(err);
        this.message = 'Error retrieving trips.';
      }
    });
  }
}