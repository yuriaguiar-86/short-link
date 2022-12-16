import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baseboard',
  templateUrl: './baseboard.component.html',
  styleUrls: ['./baseboard.component.css']
})
export class BaseboardComponent implements OnInit {

  logo = '/assets/logo.svg';

  constructor() { }
  ngOnInit(): void { }
}
