import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from "../../Services/json-placeholder.service"
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../../model/post'
import { User } from '../../model/user'
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  posts$: Observable<Post[]>
  user$: Observable<User>

  constructor(private jsonplaceholder: JsonPlaceholderService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parmeterMap => {
      const userId = +parmeterMap.get('id');
      // console.log("id from detail", id);

      this.user$ = this.jsonplaceholder.getUserById(userId);
      // sending the Id to filtered the post
      this.posts$ = this.jsonplaceholder.getPostByUserId(userId);
    })
  }
}
