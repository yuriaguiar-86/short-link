import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bost',
  templateUrl: './bost.component.html',
  styleUrls: ['./bost.component.css']
})
export class BostComponent implements OnInit {

  bost = '/assets/bg-boost-desktop.svg';

  constructor() { }
  ngOnInit(): void { }
}
