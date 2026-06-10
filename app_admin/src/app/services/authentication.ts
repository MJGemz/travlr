import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private apiBaseUrl = 'http://localhost:3000/api';

    constructor(private http: HttpClient) { }

    public saveToken(token: string): void {
        localStorage.setItem('travlr-token', token);
    }

    public getToken(): string | null {
        return localStorage.getItem('travlr-token');
    }

    public logout(): void {
        localStorage.removeItem('travlr-token');
    }

    public isLoggedIn(): boolean {
        const token = this.getToken();
        if (!token) return false;
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.exp > (Date.now() / 1000);
    }

    public register(user: { name: string; email: string; password: string }) {
        return this.http.post(`${this.apiBaseUrl}/register`, user);
    }

    public login(user: { email: string; password: string }) {
        return this.http.post(`${this.apiBaseUrl}/login`, user);
    }
}