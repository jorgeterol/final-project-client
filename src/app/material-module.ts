import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
    imports: [MatFormFieldModule, MatInputModule],
    exports: [MatFormFieldModule, MatInputModule],
})
export class MaterialModule { }
