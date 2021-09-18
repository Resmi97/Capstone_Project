import { Component, OnInit, Inject } from '@angular/core';
import { Customer } from '../customer';
import { ViewprofileService } from './viewprofile.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  customer?:Customer={};
  
  userName:any;
  password:any;

  constructor(private  viewprofileService : ViewprofileService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.userName=sessionStorage.getItem('user');
    //console.log(this.userId);
    
    
    
    this.getCustomerProfile(this.userName);

    
  }

  getCustomerProfile(userName:any): void{
    this.viewprofileService.getCustPro(userName).subscribe((customerData) =>{   
    
      this.customer=customerData, 
      console.log("hello",this.customer), 
      console.log("hai",customerData);
      //console.log("bId:",this.bId?.branchId);

      // this.dialog.open(ViewProfileDialog, {
      //   data: {   
      //     balance:this.customer.balance
      //   }
      // });
    
    }, 
    (error) =>{
      console.log(error);
    });
  }

 
}

@Component({
  selector: 'balance',
  templateUrl: 'balance.html'
})
export class ViewProfileDialog{
  constructor(@Inject(MAT_DIALOG_DATA) public data: Customer) {}
}
