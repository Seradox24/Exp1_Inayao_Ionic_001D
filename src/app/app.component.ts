import { Component } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes: Componente [] = [
    {
      icon: 'bag-add-outline',
      name: 'Servicios',
      redirectTo: '/servicios'
    },
    {
      icon: 'person-add-outline',
      name: 'Registro',
      redirectTo: '/registro'
    },
    

  ];
}
