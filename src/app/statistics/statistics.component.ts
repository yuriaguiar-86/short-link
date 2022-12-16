import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  brand = '/assets/icon-brand-recognition.svg';
  fully = '/assets/icon-fully-customizable.svg';
  detailed = '/assets/icon-detailed-records.svg';

  constructor() { }
  ngOnInit(): void { }
}
