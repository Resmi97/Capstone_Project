import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Bank } from '../bank';
import { UpdateService } from './update.service';
import { Router } from '@angular/router';
import { ViewprofileService } from '../viewprofile/viewprofile.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  customer:Customer={};
  userName:any;

  
  constructor(public service: UpdateService,private  viewprofileService : ViewprofileService,private router: Router) { }

  ngOnInit(): void {
    this.userName=sessionStorage.getItem('user');
    this.getCustomerDetails();
  }

  updateCustomer()
  {
    this.service.updateCustPro(this.customer,this.userName).subscribe((customerData) =>{   
    
      this.customer=customerData, 
      console.log("hello",this.customer), 
      console.log("hai",customerData);
      alert("Update successful");
      this.router.navigate(['/viewProfile']);
    },
    (error: HttpErrorResponse) => {
      alert("Update Unsuccessful");
      
      //addForm.reset();
    }); 

    
  }

  
  getCustomerDetails() :void {
   
 
    this.viewprofileService.getCustPro(this.userName).subscribe((customerData) =>{   
    
      this.customer=customerData, 
      console.log("hello",this.customer), 
      console.log("hai",customerData);
    },

      (error: HttpErrorResponse) => {
        // alert(error.message);
        // addForm.reset();
      }
    );}



}
