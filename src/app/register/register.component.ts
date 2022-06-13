import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from '../models/RegisterModel';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  model: RegisterModel = {
    userName: '',
    email: '',
    fullName: '',
    phoneNumber: 0,
    password: ''
  };
  isSignUpFailed = false;  
  errorMessage = '';
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
  }
  onSubmit() {
    this.authService.register(this.model).subscribe(proere => { this.reloadPage();
    this.isSignUpFailed = true;
    }
    )
    }
    reloadPage(){
      this.router.navigate(['/login']);      
    }
  }

