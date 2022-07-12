import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ColDef, GridReadyEvent } from 'ag-grid-community';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  constructor(private primengConfig: PrimeNGConfig) { }

  columnDefs: ColDef[] = [
    { field: 'make',editable:true,filter:true,width:300,minWidth:200,maxWidth:500,resizable:true},
    { field: 'model',editable: true, minWidth: 200 , width: 400,cellStyle: { 'background-color': '#EAEFF9', textAlign: 'center' }},
    { field: 'price',editable: true, minWidth: 200, width: 400}
];
rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 }
];

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
