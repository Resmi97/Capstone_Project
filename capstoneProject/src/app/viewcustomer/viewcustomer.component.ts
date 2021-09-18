import { Component, OnInit } from '@angular/core';
import { Customer, Bank } from '../customer';
import { Router } from '@angular/router';
import { ViewcustomerService } from './viewcustomer.service';



@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {

   custResp?:Customer[];
   
  
  constructor(private router:Router,private viewservice:ViewcustomerService) {    
  }

  ngOnInit() {
    this.getCustomers();
  }
 
  getCustomers(): void{
    this.viewservice.getAllCustomers().subscribe((customerData) =>{   
    
      this.custResp=customerData.customer, 
      console.log("hello",this.custResp), 
      console.log("hai",customerData);
      //console.log("bId:",this.bId?.branchId);
    }, 
    (error) =>{
      console.log(error);
    });
  }

  
}
