import { FromNow } from './fromNow.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MsToMinutes } from './msToMinutes.pipe';
@NgModule({
  declarations: [
    MsToMinutes,
    FromNow
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MsToMinutes,
    FromNow
  ]
})

export class PipesModule { }