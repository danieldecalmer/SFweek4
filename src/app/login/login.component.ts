import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  email: string = '';
  password: string = '';
  errorMessage: string = '';

  // Hardcoded user data
  users = [
    { email: 'user1@a.com', password: 'p123' },
    { email: 'user2@a.com', password: 'p456' },
    { email: 'user3@a.com', password: 'p789' }
  ];

  constructor(private router:Router) { }

  OnSubmit() {
    const user = this.users.find(u => u.email === this.email && u.password === this.password);
    if (user) {
      // Redirect to the account page
      this.router.navigate(['/account']);
      console.log('Login successful');
    } else {
      // Set error message if login fails
      this.errorMessage = 'Invalid email or password';
      console.log(this.errorMessage);
    }
  }
}
