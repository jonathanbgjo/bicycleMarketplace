import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { Bike } from './../bike'
import { User } from './../user';
import { UserService } from './../user.service'
@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {
	new_bike: Bike;
	user: User;
	my_bikes: Array<any>;
	update_bike: Bike;
  constructor( private user_service: UserService, private router: Router) { }

  ngOnInit() {
  	this.new_bike = new Bike;
  
  	this.get_one();
  	this.user_service.logged()
    	.then((user) => {this.user = user})
    	.catch(err => {this.router.navigate([""])})
    

  }
  get_one(){
  	this.user_service.get_one()
  		.then(user =>this.my_bikes =  user[0].bikes)
  		.catch( err => console.log("get one users error", err))
  	
  }
  create(){

  	this.user_service.create(this.new_bike)
  		.then(()=> {this.router.navigate(['/listings']); this.new_bike = new Bike; this.ngOnInit()})
  		.catch(err=> console.log("bike create error", err))
  }

  update(update_bike){
  	this.user_service.update(update_bike)
  		.then(bike => {this.ngOnInit()})
  		.catch( err => {console.log("update error", err)})
  }

  delete(id){
  	this.user_service.delete(id)
  		.then(()=> this.get_one())
  		.catch( err => console.log("delete error", err))
  }
}
