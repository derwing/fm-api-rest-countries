import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    DropdownModule,
    InputTextModule,
    CardModule
  ],
  exports: [
    MenubarModule,
    DropdownModule,
    InputTextModule,
    CardModule
  ]
})
export class PrimengModule { }
