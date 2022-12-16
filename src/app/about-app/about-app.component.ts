import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-app',
  templateUrl: './about-app.component.html',
  styleUrls: ['./about-app.component.css']
})
export class AboutAppComponent implements OnInit {

  illustration = '/assets/illustration-working.svg';

  constructor() { }
  ngOnInit(): void { }
}
