import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescriptions():string{

    return `${this.name} - ${this.age}`;
  }

  changeName(): void{
    this.name = 'Babayagá'
  }
  changeAge(): void {
  this.age= 50;
  }
  resetForm(): void {
    this.name = 'ironman';
    this.age= 45;

    // document.querySelectorAll('h1'1.forEach( element => {
    //   element.innerHTML = '<h1>Desde Angula</h1>';
    // }));
  }
}
