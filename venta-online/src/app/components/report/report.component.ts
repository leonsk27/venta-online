import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  //graficos
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';




  resultReports: any[];
  date1: Date;
  date2: Date;
  optionReport: number;
  options = [
    { opt: "Productos más vendidos por mes (mínimamente 8 y de cada producto debe tener como mínimo 12 compradores)", value: 1 },
    { opt: "Cantidad de ventas por departamento (de la categoría de productos) de mayor a menor. Dada dos fechas seleccionadas mostrar el reporte.", value: 3 }
  ]

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.optionReport = 1;
    this.reportOne(1);
  }
  changeReportOption(option: number) {
    this.optionReport = option;
  }
  // methods for report 1
  reportOne(month: number) {
    this.reportService.reportOne(month).subscribe(
       res => {
         console.log('res actual: ', res);
         this.resultReports = res;
       },
       err => {
         console.log('error report 1: ', err);
       }
    )
  }
  // methods for report 2

  // methods for report 3
  reportThree() {
    console.log('dates: ', this.date1, this.date2);
    // this.reportService.reportThree(this.date1, this.date2).subscribe(
    //    res => {
    //      console.log('res actual: ', res);
    //      this.resultReports = res;
    //    },
    //    err => {
    //      console.log('error report 1: ', err);
    //    }
    // )
  }





















  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
