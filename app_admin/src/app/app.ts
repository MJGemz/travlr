import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './services/authentication';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterLink, CommonModule],
    templateUrl: './app.html'
})
export class App {
    constructor(
        private authService: AuthenticationService,
        private router: Router
    ) { }

    isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
    }

    onLogout(event: Event): void {
        event.preventDefault();
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}