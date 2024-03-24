import { Component } from '@angular/core';//explica como funciona el componente

@Component({ //componente principal
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title : string = 'Hola Angular';

}
