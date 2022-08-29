import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
    logo = 'https://i.ibb.co/CbFhWF5/pngegg-1.png';
    nombreP = 'PERIODICO SPRINGFIELD';
    ino1 = 'https://i.ibb.co/frk0W5Y/pngegg-2.png';
    nombren1 = 'BUSCADO POR EVACION DE IMPUESTOS';
    nombren2 = 'GANAN LOS JUEGOS EXTREMOS';
    ino2 = 'https://i.ibb.co/QKRQJTv/Bart-PNG-Images-HD.png';
  constructor() { }
    
  ngOnInit(): void {
  }

}
