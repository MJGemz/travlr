import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../services/authentication';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './login.html',
    styleUrl: './login.css'
})
export class LoginComponent {
    credentials = { email: '', password: '' };
    error = '';

    constructor(
        private authService: AuthenticationService,
        private router: Router
    ) { }

    onSubmit(): void {
        this.authService.login(this.credentials).subscribe({
            next: (resp: any) => {
                this.authService.saveToken(resp.token);
                this.router.navigate(['/']);
            },
            error: () => {
                this.error = 'Invalid email or password.';
            }
        });
    }
}