import { Component, OnInit } from '@angular/core';
import { Deportes } from './Deportes';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.css']
})
export class DeportesComponent implements OnInit {
  logo = 'https://i.ibb.co/CbFhWF5/pngegg-1.png';
  nombreP = 'PERIODICO SPRINGFIELD';
  nombre1 = 'DEPORTES';
  ino1 = 'https://i.ibb.co/0VkjN8c/pngwing-com-3.png';
  nombren2 = 'HOMERO COMPITE EN ATLETISMO';
  nombren1 = 'GANAN LOS JUEGOS EXTREMOS';
  ino2 = 'https://i.ibb.co/nj7XK97/pngwing-com-2.png';
  constructor() { 
  
  }

  ngOnInit(): void {
  }

}
