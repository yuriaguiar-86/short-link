import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AboutAppComponent } from './about-app/about-app.component';
import { AppComponent } from './app.component';
import { BaseboardComponent } from './baseboard/baseboard.component';
import { BostComponent } from './bost/bost.component';
import { SearchComponent } from './search/search.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseboardComponent,
    ToolbarComponent,
    AboutAppComponent,
    StatisticsComponent,
    BostComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
