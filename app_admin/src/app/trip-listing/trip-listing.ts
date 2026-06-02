import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
})
export class TripListing {

  constructor(private router: Router) {}

  trips = [
    {
      name: 'Bahamas Escape',
      resort: 'Atlantis Paradise Island',
      length: 5,
      perPerson: 1200,
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=60',
      description: 'Crystal waters, beaches, and sunshine.'
    },
    {
      name: 'Miami Weekend',
      resort: 'South Beach Resort',
      length: 3,
      perPerson: 650,
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60',
      description: 'Nightlife, ocean views, and food spots.'
    },
    {
      name: 'Jamaica Adventure',
      resort: 'Montego Bay Resort',
      length: 7,
      perPerson: 1500,
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=60',
      description: 'Mountains, beaches, and reggae vibes.'
    },
    {
      name: 'Cancun Getaway',
      resort: 'Riviera Maya Resort',
      length: 4,
      perPerson: 900,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60',
      description: 'Clear water and luxury stays.'
    }
  ];

  editTrip(trip: any) {
    localStorage.setItem('selectedTrip', JSON.stringify(trip));
    this.router.navigate(['/edit-trip']);
  }
}