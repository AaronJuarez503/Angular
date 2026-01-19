import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  employeeCode = signal('');

  constructor(private router: Router) {}

  login() {
    if (this.employeeCode().trim() !== '') {
      this.router.navigate(['/home']);
    }
  }
}
