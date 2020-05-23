import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { User } from "../../model/user";
import { JsonPlaceholderService } from "../../Services/json-placeholder.service"
import { Observable } from 'rxjs';



@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent {
  constructor(private jsonplaceholder: JsonPlaceholderService) { }
  users: Observable<User[]>
  ngOnInit() {
    this.users = this.jsonplaceholder.getdata()
    console.log("ng on it", this.users);

  }

  getDataFromApi() {

  }


}


