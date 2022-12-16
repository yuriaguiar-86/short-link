import { Component, OnInit } from '@angular/core';
import { MessageENUM } from './messageENUM';
import { ShortUrlService } from './short-url.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  shorten = '/assets/bg-shorten-desktop.svg';

  url!: any;
  message!: string;
  text: boolean = false;
  msg_error: boolean = false;

  constructor( private service: ShortUrlService ) { }

  ngOnInit(): void { }

  shortUrl(value: string) {
    this.service.shortenUrl(value).subscribe(
      success => {
        this.url = success;
      },
      error => {
        this.message = this.inspecErrorMessage(error.error.error_code);
        this.msg_error = true;
      }
    );
  }

  copyUrl(value: string) {
    navigator.clipboard.writeText(value);
    this.alterText();
  }

  alterText() {
    this.text = true;
  }

  inspecErrorMessage(code: number) {
    if(MessageENUM[code]) {
      return 'Unknown error';
    }
    return MessageENUM[code];
  }
}
