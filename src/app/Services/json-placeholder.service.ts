import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { map } from 'rxjs/operators'

const userImages: string[] = [
  "../assets/image/users-1.svg",
  "../assets/image/users-2.svg ",
  "../assets/image/users-3.svg ",
  "../assets/image/users-4.svg ",
  "../assets/image/users-5.svg ",
  "../assets/image/users-6.svg ",
  "../assets/image/users-7.svg ",
  "../assets/image/users-8.svg ",
  "../assets/image/users-9.svg ",
  "../assets/image/users-10.svg",
]

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {
  readonly URL = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }
  getdata(): Observable<User[]> {

    return this.http.get<User[]>(this.URL).pipe(
      //pipe-adding a pipeline
      map(users =>
        //takes in the response from Api and returns a new response
        //this map returns the users with the attached image
        users.map((user, index) => {
          //grab each user and change it and returns
          user.image = userImages[index];
          return user;
        })

      ))
  }


}
