import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/TokenStorageService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn = false;
  constructor(private tokenStorageService: TokenStorageService) { }
  
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    const user = this.tokenStorageService.getUser(); 
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();}
}
