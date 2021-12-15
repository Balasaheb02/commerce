import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/model/commerce.modal';
import { CommerceService } from 'src/app/services/commerce.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companies$: Observable<Company[]> = this.commerceService.getCompanies();

  constructor(
    private commerceService: CommerceService,
    private loadingService: LoadingService) { }

  ngOnInit() {
  }

}
