import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Finance } from 'src/app/model/commerce.modal';
import { CommerceService } from 'src/app/services/commerce.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  finance$: Observable<Finance[]> = this.commerceService.getFinance();

  constructor(
    private commerceService: CommerceService,
    public loadingService: LoadingService) { }

  ngOnInit() {
  }

}
