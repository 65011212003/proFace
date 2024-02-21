import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  showPassword: boolean = false;
  passwordInputType: string = 'password';

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
    this.passwordInputType = this.showPassword ? 'text' : 'password';
  }

}
