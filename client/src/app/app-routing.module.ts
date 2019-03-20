import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './users/user-login/user-login.component'
import { UserDashboardComponent } from './users/user-dashboard/user-dashboard.component'
import { UserListingComponent } from './users/user-listing/user-listing.component'
const routes: Routes = [
	{	path: '',component: UserLoginComponent },
	{	path: 'dashboard',component: UserDashboardComponent},
	{	path: 'listings',component: UserListingComponent},
	// {	path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
