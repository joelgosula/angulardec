
import { Component } from '@angular/core';

@Component({
    selector: 'flipzon-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    //Always have the property declarations first
    // constructor
    // methods
    //sitename: String;
    sitenav:any;
    page:String;
    constructor() {
        //Assigning the value to properties.
       // this.sitename ="FlipZon";
        this.sitenav={
            sitename:"FlipZon",
            logo:"http://www.nbits.in/wp-content/uploads/2016/09/nbits.png",
            centerContent:["Home","Products","Cart","MyOrders"],
            //rightContent:["Signup","Login"]
            rightContent:[
                {displayname:"Signup",icon:"glyphicon glyphicon-user"},
            {displayname:"Login",icon:"glyphicon glyphicon-log-in"}]
        }
    }

    loadPage(p){
        this.page=p;
    }
}