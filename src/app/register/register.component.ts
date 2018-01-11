import { Component, OnInit } from '@angular/core';
import { UserDetails } from './register';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerDetails:UserDetails;
  countries:Array<any>;
  genderList:Array<any>;
 // registerDetails:any;
  constructor(private dataService:DataService) {
   this.registerDetails = new UserDetails();
   this.countries = this.dataService.getCountries();
   this.genderList = this.dataService.getGender();
   this.registerDetails.Country="";
  // this.registerDetails = {};
   }
   registerUser(){
     console.log(this.registerDetails);
   }
  
}
