import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seis',
  templateUrl: './seis.page.html',
  styleUrls: ['./seis.page.scss'],
})
export class SeisPage implements OnInit {
  nombre:string;
  apellido:string;
  mensaje : string = "Ud es un super estudiante 2024";

  asignaturas = [
    {nombre : "PGY4121", nota: 39.5},
    {nombre : "mdy3121", nota: 50},
    {nombre : "PGY1011", nota: 40},
  ];


  constructor() { 
    this.nombre = "Juan";
    this.apellido="Fernandez";
    console.log(this.asignaturas);
    console.table(this.asignaturas);
  }

  ngOnInit() {
  }

}
