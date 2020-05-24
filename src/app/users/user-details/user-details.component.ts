import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from "../../Services/json-placeholder.service"
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../../model/post'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private jsonplaceholder: JsonPlaceholderService,
    private route: ActivatedRoute,
    private router: Router) { }
  posts: Observable<Post[]>
  ngOnInit(): void {
    this.posts = this.jsonplaceholder.getPost()
  }

}
