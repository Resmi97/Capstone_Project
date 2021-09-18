import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  headers=new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  

  constructor(private httpService: HttpClient,private router:Router) { }

  //admin viewing customer details
  updateCustPro(customer:any,userName:any): Observable<Customer>{
    return this.httpService.put<Customer>(environment.APIUrl +'customer/updateCustomer/'+userName,customer,{ 'headers': this.headers });
    
  }
}
