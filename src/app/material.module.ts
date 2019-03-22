import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';
import { StarRatingConfigService, StarRatingModule } from 'angular-star-rating';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    StarRatingModule
  ],
  providers: [
    StarRatingConfigService
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    StarRatingModule
  ],
})
export class MaterialModule { }