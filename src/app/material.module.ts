import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatFormFieldModule, MatInputModule, MatButtonModule, MatTabsModule, MatTabNav, MatTabLink} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTabsModule,
        
    ],
    exports: [
        MatFormFieldModule, 
        MatInputModule ,
        MatButtonModule,
        MatTabNav,
        MatTabLink

    ]
})
export class MaterialModule { }