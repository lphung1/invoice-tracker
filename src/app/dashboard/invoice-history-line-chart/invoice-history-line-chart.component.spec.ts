import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceHistoryLineChartComponent } from './invoice-history-line-chart.component';

describe('InvoiceHistoryLineChartComponent', () => {
  let component: InvoiceHistoryLineChartComponent;
  let fixture: ComponentFixture<InvoiceHistoryLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceHistoryLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceHistoryLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
