import { Component } from "@angular/core";
import { User } from "../../model/user";
import { JsonPlaceholderService } from "../../Services/json-placeholder.service"
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent {
  constructor(private jsonplaceholder: JsonPlaceholderService,
    private route: ActivatedRoute,
    private router: Router

  ) { }
  users: Observable<User[]>
  user: User
  ngOnInit() {
    this.users = this.jsonplaceholder.getUser()
    console.log("ng on it", this.users);

  }


  btnClick(id: number) {
    console.log("btnclick", id)
    this.router.navigate(['/detail', id]);

  };


}


