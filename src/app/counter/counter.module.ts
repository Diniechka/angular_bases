import { NgModule } from "@angular/core";//Este es un agrupador en el cual se van a tener las definiciones de sus componentes
import { CounterComponent } from "./components/counter/counter.component";


@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]


})

export class CounterModule{}
