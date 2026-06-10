import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css',
})
export class EditTrip implements OnInit {

  editForm!: FormGroup;
  trip: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private tripDataService: TripDataService
  ) {}

  ngOnInit(): void {
    this.trip = JSON.parse(localStorage.getItem('selectedTrip') || '{}');

    this.editForm = this.fb.group({
      code:        [this.trip.code],
      name:        [this.trip.name],
      resort:      [this.trip.resort],
      length:      [this.trip.length],
      perPerson:   [this.trip.perPerson],
      image:       [this.trip.image],
      description: [this.trip.description]
    });
  }

  save(): void {
    const updatedTrip = { ...this.trip, ...this.editForm.value };
    this.tripDataService.updateTrip(updatedTrip).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: (err: any) => {
        console.error('Error updating trip:', err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['']);
  }

}