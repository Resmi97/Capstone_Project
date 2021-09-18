import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer, CustomerResponse } from '../customer';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewcustomerService {
   headers=new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

   constructor(private httpService: HttpClient,private router:Router) { }

  //admin viewing customer details
  getAllCustomers(): Observable<CustomerResponse>{
    return this.httpService.get<CustomerResponse>(environment.APIUrl +'customer/listCustomer',{ 'headers': this.headers });
    
  }

 


  
}
