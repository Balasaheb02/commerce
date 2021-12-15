import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/commerce.modal';
import { CommerceService } from 'src/app/services/commerce.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]> = this.commerceService.getUsers();

  constructor(
    private commerceService: CommerceService,
    private router: Router,
    public loadingService: LoadingService) { }

  ngOnInit() {
  }

  routeToDetails(id) {
    this.router.navigate([`user/${id}`]);
  }
}
