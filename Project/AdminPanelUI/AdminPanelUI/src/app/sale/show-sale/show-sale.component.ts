import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-sale',
  templateUrl: './show-sale.component.html',
  styleUrls: ['./show-sale.component.css']
})
export class ShowSaleComponent implements OnInit {

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshSaleList();
  }

  SaleList:any=[];

  refreshSaleList()
  {
    this.service.getSaleList().subscribe(data=>{
      this.SaleList=data;
    });
  }


}
