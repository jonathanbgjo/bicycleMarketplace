 import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs';
import { User } from './user';
import { Bike } from './bike'
@Injectable()
export class UserService {

  constructor(private http: Http) { }

  register(new_user: User){
    return this.http.post("/register", new_user).map(data => data.json()).toPromise()
  }
  login(user: User){
    return this.http.post("/login", user).map(data => data.json()).toPromise()
  }
  create(new_bike: Bike){

  	return this.http.post("/create",new_bike).map(data=>data.json()).toPromise()
  }
  get_one(){
  	return this.http.get("/get_one").map(data=>data.json()).toPromise()
  }

   get_all(){
  	return this.http.get("/get_all").map(data=>data.json()).toPromise()
  }

  update(update_bike: Bike){
  	return this.http.post("/update", update_bike).map(data=>data.json()).toPromise()
  }
  delete(id){
  	return this.http.delete(`/delete/${id}`).map(data=>data.json()).toPromise()
  }
  logged(){
  	return this.http.get("/logged").map(data=>data.json()).toPromise()
  }
  
}