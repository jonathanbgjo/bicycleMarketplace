 import { Component, OnInit } from '@angular/core';


import { Router } from "@angular/router"
import { UserService } from './../user.service'
import { User } from './../user'
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {    
	new_user : User
	user: User
	flag: Boolean
  constructor(private user_service: UserService, private router: Router) { }

  ngOnInit() {
  	this.new_user = new User
  	this.user = new User
  	this.flag = false
  }

  register(){
  	this.user_service.register(this.new_user)
  		.then(() => {this.router.navigate(["/"]);this.new_user = new User})
  		.catch(err=> {this.flag = true; console.log("user register error", err)})

  }
  login(){
  	this.user_service.login(this.user)
  		.then(() => this.router.navigate(["/dashboard"]))
  		.catch(err=> console.log("user login error", err))
  }

}
