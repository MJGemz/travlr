import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css',
})
export class EditTrip implements OnInit {

  editForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {

    const trip = JSON.parse(localStorage.getItem('selectedTrip') || '{}');

    this.editForm = this.fb.group({
      name: [trip.name],
      resort: [trip.resort],
      length: [trip.length],
      perPerson: [trip.perPerson],
      image: [trip.image],
      description: [trip.description]
    });

  }

  save(): void {
    const updatedTrip = this.editForm.value;
    localStorage.setItem('updatedTrip', JSON.stringify(updatedTrip));
    this.router.navigate(['']);
  }

  goBack(): void {
    this.router.navigate(['']);
  }

}