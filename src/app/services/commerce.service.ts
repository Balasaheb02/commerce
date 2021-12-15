import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company, Finance, Product, User } from '../model/commerce.modal'

@Injectable({
  providedIn: 'root'
})
export class CommerceService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/user`);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/product`);
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}/company`);
  }

  getFinance(): Observable<Finance[]> {
    return this.http.get<Finance[]>(`${this.apiUrl}/finance`);
  }

}
