import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormsComponent } from './components/forms/forms.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    FormsComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NausikaaModule { }
