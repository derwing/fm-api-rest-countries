import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    DropdownModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    ChipModule
  ],
  exports: [
    MenubarModule,
    DropdownModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    ChipModule
  ]
})
export class PrimengModule { }
