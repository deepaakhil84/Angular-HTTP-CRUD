import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { map } from 'rxjs/operators';
import { Post } from '../model/post';
import { filter } from 'minimatch';


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
  readonly postURL = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }
  users$: Observable<User[]> = this.getUser();
  posts$: Observable<Post[]> = this.getPosts();
  newpost: Post

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.URL).pipe(
      //pipe-adding a pipeline
      map(users =>
        //takes in the response from Api and returns a new response
        //this map returns the users with the attached image
        users.map((user, index) => {
          //grab each user and change it and returns
          user.image = userImages[index];
          return user;
          console.log("from user", user)
        })

      ))
    console.log("users", this.users$);
  }

  // posts$ :Observable<Post[]> =
  // this.http.get<Post[]>(this.postURL)
  // if the property returning an obervable the property should have $ sign at end of 
  // it so that we can know its an observable


  getUserById(id: number): Observable<User> {
    return this.users$.pipe(
      //returns an array of single user in it
      map(users =>
        users.filter(post => {
          return post.id === id
        }))
      //map returns a single user
      , map(user => user[0]

      ))
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postURL)
  }

  getPostByUserId(userId: number): Observable<Post[]> {
    return this.posts$.pipe(
      map(posts =>
        posts.filter(post => {
          return post.userId === userId;
        })

      )

    )

  }


  //create component

  addPost(newPost: Partial<Post>): Observable<Post> {
    return this.http.post<Post>('postUrl', this.newpost)

    // console log an obervable
    // pipe and tap

  }

}
