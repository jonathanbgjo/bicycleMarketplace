import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserDashboardComponent } from './users/user-dashboard/user-dashboard.component';
import { UserService } from './users/user.service';
import { UserListingComponent } from './users/user-listing/user-listing.component'
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserLoginComponent,
    UserDashboardComponent,
    UserListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
