import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario = {
    name: '',
    telefono: '',
    email:'',
    password:'',
  }
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('submit');
    console.log(this.usuario);
  }


}
