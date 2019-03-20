import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { User } from './../user';
import { Bike } from './../bike'
import { UserService } from './../user.service'
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
	user: User
	bikes: Array<any>
  constructor(private user_service: UserService, private router: Router) { }
	  ngOnInit() {
  	this.get()
  	this.get_one()
  	this.user_service.logged()
    	.then((user) => {this.user = user})
    	.catch(err => {this.router.navigate([""])})
    
  }
    get(){
  	this.user_service.get_all()
  		.then(bikes =>this.bikes =  bikes)
  		.catch(err => console.log("get all bikes error", err))
  }
    get_one(){
  	this.user_service.get_one()
  		.then(user =>this.user =  user)
  		.catch( err => console.log("get one users error", err))
  	
  }
  delete(id){
  	this.user_service.delete(id)
  		.then(()=> this.get_one())
  		.catch( err => console.log("delete error", err))
  }
  // contact(id){
  // 	this.user_service.contact(id)
  // 		.then(()=> this.get_one())
  // 		.catch( err => console.log("contact error", err))
  // }
}
