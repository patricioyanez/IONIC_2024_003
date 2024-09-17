import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ocho',
  templateUrl: './ocho.page.html',
  styleUrls: ['./ocho.page.scss'],
})
export class OchoPage implements OnInit {
  mostrar: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  verModal()
  {
    this.mostrar = !this.mostrar;
  }
}
