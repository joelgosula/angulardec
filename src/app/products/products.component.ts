import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  flipkartproducts: Array<any>;
  pager:any;
  pagesArray:Array<number>
  constructor(private dataSvc:DataService) {

    this.flipkartproducts =this.dataSvc.getProducts();
    this.pagesArray=[];
    this.buildPager();
    this.buildPageArray();
  }
  buildPager(){
    this.pager = {
      totalNumberOfPages:this.flipkartproducts.length/10,
      itemsPerPage:10,
      currentPage:1,
      startIndex:0,
      endIndex:9

    }
  }
  
  buildPageArray(){
    for(var i=1;i<this.pager.totalNumberOfPages+1;i++){
      this.pagesArray.push(i)
    }
    console.log(this.pagesArray)
  }
  changePage(pageNo){
    console.log(pageNo);
    this.pager.currentPage= pageNo;
    this.pager.startIndex = (pageNo-1)*10;
    this.pager.endIndex = pageNo*10-1;

    console.log(this.pager);
  }


}
