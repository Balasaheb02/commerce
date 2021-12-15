import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/commerce.modal';
import { CommerceService } from 'src/app/services/commerce.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products$: Observable<Product[]> = this.commerceService.getProducts();

  constructor(
    private commerceService: CommerceService,
    private loadingService: LoadingService) { }

  ngOnInit() {
  }

}
