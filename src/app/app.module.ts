import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StarRatingModule, StarRatingConfigService } from 'angular-star-rating';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './core/app-routing.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MaterialModule
    StarRatingModule
  ],
  providers: [
    StarRatingConfigService
  ],
  bootstrap: [AppComponent],
  exports: [
    // MaterialModule
  ]
})
export class AppModule { }
