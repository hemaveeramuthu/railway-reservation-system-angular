import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email === 'test@example.com' && this.password === 'password') {
      // Navigate to a different page upon successful login
      this.router.navigate(['/']);
    } else {
      alert('Invalid credentials');
    }
  }
}
