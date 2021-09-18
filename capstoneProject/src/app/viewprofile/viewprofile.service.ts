import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewprofileService {

  

  headers=new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

   constructor(private httpService: HttpClient,private router:Router) { }

  //admin viewing customer details
  getCustPro(userName:any): Observable<Customer>{
    return this.httpService.get<Customer>(environment.APIUrl +'customer/getProfile/'+userName,{ 'headers': this.headers });
    
  }
}
