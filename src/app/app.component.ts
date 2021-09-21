import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

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
  constructor(private menuCtrl:MenuController) {}

  componentes: Componente [] = [
    {
      icon: 'compass-outline',
      name: 'Destinos',
      redirectTo: '/servicios'
    },
    {
      icon: 'person-add-outline',
      name: 'Registro',
      redirectTo: '/registro'
    },

  ];
  cerrarMenu(){
    this.menuCtrl.close('first')
  }
}
