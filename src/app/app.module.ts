import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { RouterModule, Routes } from '@angular/router'
const appRoutes: Routes = [
  { path: 'list', component: ListUserComponent },
  { path: 'detail', component: UserDetailsComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
