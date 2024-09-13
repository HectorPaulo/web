import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  precio: number;
  imagen: string;
  category: string;
  state: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // styleUrls en lugar de styleUrl
})
export class HomeComponent {
  productos: Producto[] = [
    {
      category: 'Electrónica',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPANcIURpz8Koful1Uc7WME0033THlQz4CIA&s',
      nombre: 'mouse gaymer',
      precio: 1500,
      state: true
    },
    {
      category: 'Hogar',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLTY_zduKlrksgQ6HaXlZRgoWiCromyhuEgA&s',
      nombre: 'Tostadora',
      precio: 50,
      state: true
    },
    {
      category: 'Juguetes',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3CllCo3FmZwZn0BHIlHdU9qxI9EAJDraFnw&s',
      nombre: 'Juguete para niños',
      precio: 30,
      state: false
    },
    {
      category: 'Moda',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgroTiEJG_wH7gk5tHbsR7Kyn2TvC8juRlg&s',
      nombre: 'Camiseta',
      precio: 20,
      state: true
    },
    {
      category: 'Electrónica',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZWjeSHY9ilsfwxTJ5sSO-klUXE6AVY9DZAw&s',
      nombre: 'Smartphone',
      precio: 900,
      state: true
    },
    {
      category: 'Electrónica',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmc-uxHeJNTLUb05wUIMP53TtPAbA3TQOD0g&s',
      nombre: 'Tablet',
      precio: 400,
      state: false
    },
    {
      category: 'Licorería',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSge3YdO7I01ek-d5gNaWEb6nMy30BS7SmJFQ&s',
      nombre: 'Bacardi Mango Chile',
      precio: 1400,
      state: true
    },
    {
      category: 'Calzado',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvXVUL_ABnEVpjJiXGRHNJ5bNv9LOdjjyKQ&s',
      nombre: 'Tenis Adidas',
      precio: 20,
      state: true
    },
    {
      category: 'Juguetes',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzEf4rPU-f74dgDcqsgVEPcapF6Ret0k4dg&s',
      nombre: 'Terreneitor',
      precio: 3000,
      state: true
      
    },
    {
      category: 'juegos de mesa',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGRYZeJj68tMM518hXwA6RTWozbLiG6xEKw&s',
      nombre: 'Monos Locos',
      precio: 200,
      state: true
    },
  ];
}
