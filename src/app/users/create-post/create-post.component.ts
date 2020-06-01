import { Component, OnInit } from '@angular/core';
import { Post } from "../../model/post"
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs'
import { JsonPlaceholderService } from "../../Services/json-placeholder.service"


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  posts$: Observable<Post[]>
  newPost: Partial<Post>;
  body: string;
  id: number;
  title: string;
  userId: number;

  constructor(private jsonplaceholder: JsonPlaceholderService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parmeterMap => {
      this.userId = +parmeterMap.get('id');
      console.log("userid", this.userId);


    })
  }

  savePost(post: Partial<Post>): void {
    this.newPost = {
      body: this.body,
      title: this.title,
      userId: this.userId,

    }

    this.jsonplaceholder.addPost(this.newPost).subscribe();
    this.router.navigate(['/post:id']);
  }


}