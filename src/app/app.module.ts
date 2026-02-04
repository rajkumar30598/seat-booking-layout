import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeatLayoutComponent } from './components/seat-layout/seat-layout.component';
import { BookingSummaryComponent } from './components/booking-summary/booking-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    SeatLayoutComponent,
    BookingSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
