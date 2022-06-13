import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

import { UserModel } from '../models/user';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit { 

  users: UserModel[] = [];
  user: UserModel = {
      userID: 0,
      userName: '',
      password: '',
      fullName: '',
      email: '',
      phoneNumber: ''
  }

 kolone= 'all';
 tabela= '';
 uslov= '';
 
  signalid:number = 0;
  signalun:number = 0;
  signalpw:number = 0;
  signalfn:number = 0;
  signalem:number = 0;
  signalpn:number = 0;
  signald:number = 0;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    if (!localStorage.getItem('token')) { 
      localStorage.setItem('token', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('token') 
    } 
    this.getAllUsersWithUslov();
  }
 lista(){
   //signals for html table
   if(this.uslov == ''){
     this.uslov = 'no';
   }
   if(this.tabela == ''){
     this.tabela = 'user';
   }
   else
   if(this.tabela != "user" && this.tabela != "User"){
    alert("Table doesn't exist");
    this.signalem = 0;
    this.signalfn = 0;
    this.signalid = 0;
    this.signalun = 0;
    this.signalpn = 0;
    this.signalpw = 0;
    this.signald  = 0;
   }
   if(!this.kolone.includes("username")){
     this.signalun = 0;
     this.signald  = 1;
   }
   else{
     this.signalun = 1;
   }
   if(!this.kolone.includes("userid")){
     this.signalid = 0;
     this.signald  = 1;
  }
  else{
     this.signalid = 1;
  }
  if(!this.kolone.includes("password")){
     this.signalpw = 0;
     this.signald  = 1;
  }
  else{
     this.signalpw = 1;
  }
  if(!this.kolone.includes("email")){
     this.signalem = 0;
     this.signald  = 1;
  }
  else{
     this.signalem = 1;
  }
  if(!this.kolone.includes("phonenumber")){
     this.signalpn = 0;
     this.signald  = 1;
  }
  else{
     this.signalpn = 1;
  }
  if(!this.kolone.includes("fullname")){
     this.signalfn = 0;
     this.signald  = 1;
  }
  else{
     this.signalfn = 1;
  }
  if(this.kolone.includes("all")){
    this.signalem = 1;
    this.signalfn = 1;
    this.signalid = 1;
    this.signalun = 1;
    this.signalpn = 1;
    this.signalpw = 1;
    this.signald  = 1;
  }
  if(this.kolone == ''){
    this.signalem = 0;
    this.signalfn = 0;
    this.signalid = 0;
    this.signalun = 0;
    this.signalpn = 0;
    this.signalpw = 0;
    this.signald  = 0;
  }
 }
 submit(){ 
   //button, first i need lista() because otherwise doesn't work properly
   this.lista();
   this.getAllUsersWithUslov();
  }
  getAllUsersWithUslov(){
      this.userService.getAllUsersWithUslov(this.kolone,this.tabela,this.uslov).subscribe((response) => this.users = response);
  }
  getAllUsers(){
    this.userService.getAllUsers().subscribe((response) => this.users = response); 
  }
  addUser(){
      return this.userService.addUser(this.user).subscribe(response => this.getAllUsersWithUslov());
  }
  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe(response => this.getAllUsersWithUslov())
  }
}
