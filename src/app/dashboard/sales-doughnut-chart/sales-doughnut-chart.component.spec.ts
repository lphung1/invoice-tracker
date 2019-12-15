import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDoughnutChartComponent } from './sales-doughnut-chart.component';

describe('SalesDoughnutChartComponent', () => {
  let component: SalesDoughnutChartComponent;
  let fixture: ComponentFixture<SalesDoughnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesDoughnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
