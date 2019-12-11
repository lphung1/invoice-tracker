import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-invoice-history-line-chart',
  templateUrl: './invoice-history-line-chart.component.html',
  styleUrls: ['./invoice-history-line-chart.component.css']
})
export class InvoiceHistoryLineChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [650, 590, 800, 81, 56, 55, 400], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
