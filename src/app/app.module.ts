// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    CarFormComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule
  ],
  providers: [],
  bootstrap: []  // No incluir AppComponent aquí
})
export class AppModule { }
