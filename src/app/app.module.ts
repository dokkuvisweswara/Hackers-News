import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { DatashowComponent } from './datashow/datashow.component';
import { NewsService } from './news.service';
import { ApiService } from './api.service';
import { PerticularComponent } from './perticular/perticular.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    DatashowComponent,
    PerticularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    NewsService, ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
