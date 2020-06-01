import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './users/create-post/create-post.component';
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { path: 'list', component: ListUserComponent },
  { path: 'post', component: CreatePostComponent },
  { path: 'detail', component: UserDetailsComponent },
  { path: "detail/:id", component: UserDetailsComponent },
  { path: "post/:id", component: CreatePostComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    UserDetailsComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
