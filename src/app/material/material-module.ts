import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSlideToggleModule } from '@angular/material';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatSliderModule,
        MatSlideToggleModule]
        ,
        exports: [
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatSliderModule,
        MatSlideToggleModule],
    })
export class MaterialModule { }
