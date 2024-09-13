import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // constructor() {
  //   this.funcionPrincipal();
  // }
  // age=20;
  // name: number | string = '';
  // cualquiera : any = undefined;
  // fullName : string = 'Héctor Adrián Paulo Vázquez'
  // heros: string = 'Joker, Batman, Flash';
  // pokemon = {
  //   name: 'Pikachu',
  //   type: 'Electric',
  //   abilities: ['Thunderbolt', 'Thunder', 'Lightning Bolt', 'Thunder Punch'],
  //   hp: 60,
  // }
  // funcionPrincipal(){
  //   this.cualquiera = 'Hola';
  //   this.name = 'Paulo';
  //   console.log('Mi edad es de ' + this.age + ' años.')
  // }
  // changeName(){
  //   if (this.fullName == 'Héctor Adrián Paulo Vázquez'){
  //     this.fullName = 'Paulo';
  //   } else {
  //     this.fullName = 'Héctor Adrián Paulo Vázquez';
  //   }
  // }
  listaProductos = [
    {
      codigo: 223456,
      nombre: 'Dálmata',
      precio: '$18',
      descripcion: 'Pulsera de la marca Dálmata',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptDoaCtyjLOF55pUIYQwUCDozONict_z_Xw&s.img',
    },
    {
      codigo: 225756,
      nombre: 'Coca-Cola',
      precio: '$22',
      descripcion: 'Bebida Papurefrescante',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxpWoR_-3rsruP6DyqWFhKmb5IhueSlIiWgA&s.img',
    },
    {
      codigo: 3465473,
      nombre: 'Maruchan',
      precio: '$15',
      descripcion: 'Sopa instantánea',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsYUbc1bzPJ2j-cxSMN4mwXbOD6HyOl0uiI3zE-Nj1kpVQk0sy6UPUJlopU460dVtc_o&usqp=CAU.img',
    },
  ];
}
