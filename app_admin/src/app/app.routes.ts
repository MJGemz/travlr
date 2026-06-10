import { Routes } from '@angular/router';
import { TripListing } from './trip-listing/trip-listing';
import { EditTrip } from './edit-trip/edit-trip';
import { LoginComponent } from './login/login';

export const routes: Routes = [
    { path: '',          component: TripListing },
    { path: 'edit-trip', component: EditTrip },
    { path: 'login',     component: LoginComponent }
];