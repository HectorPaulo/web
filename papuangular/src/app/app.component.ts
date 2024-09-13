import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
    this.funcionPrincipal();
  }
  age=20;
  name: number | string = '';
  cualquiera : any = undefined;
  fullName : string = 'Héctor Adrián Paulo Vázquez'
  heros: string = 'Joker, Batman, Flash';
  pokemon = {
    name: 'Pikachu',
    type: 'Electric',
    abilities: ['Thunderbolt', 'Thunder', 'Lightning Bolt', 'Thunder Punch'],
    hp: 60,
  }
  funcionPrincipal(){
    this.cualquiera = 'Hola';
    this.name = 'Paulo';
    console.log('Mi edad es de ' + this.age + ' años.')
  }
}
