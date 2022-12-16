import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  logo = '/assets/logo.svg';
  twitter = '/assets/icon-twitter.svg';
  facebook = '/assets/icon-facebook.svg';
  pinterest = '/assets/icon-pinterest.svg';
  instagram = '/assets/icon-instagram.svg';

  constructor() { }
  ngOnInit(): void { }
}
