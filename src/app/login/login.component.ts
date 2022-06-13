import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/TokenStorageService';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService
    , private router: Router) { }
  login: any = {
    userName: '',
    password: ''
  }
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;    
    }
  }
  onSubmit(){
    const {userName, password} = this.login;
    this.authService.login(this.login).subscribe({next: data => {     
      this.tokenStorage.saveUser(data);
      this.tokenStorage.saveToken(data.accessToken);
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.reloadPage();
    },
    error: err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  });
  }
  reloadPage(): void {
    this.router.navigate(['/user']);   
  }
}
