import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  resultReports: any[];
  optionReport: number;
  options = [
    { opt: "Productos más vendidos por mes (mínimamente 8 y de cada producto debe tener como mínimo 12 compradores)", value: 1 }
  ]
  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.reportOne();
  }
  changeReportOption(option: number) {
    this.optionReport = option;
  }
  reportOne() {
    this.reportService.reportOne().subscribe(
       res => {
         console.log('res actual: ', res);
         this.resultReports = res;
       },
       err => {
         console.log('error report 1: ', err);
       }
    )
  }
}
