import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-sales-doughnut-chart',
  templateUrl: './sales-doughnut-chart.component.html',
  styleUrls: ['./sales-doughnut-chart.component.css']
})
export class SalesDoughnutChartComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Plumbing', 'Electrical', 'Commercial AC'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
