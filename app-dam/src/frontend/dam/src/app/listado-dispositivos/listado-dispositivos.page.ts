import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { DispositivoService } from '../services/dispositivo.service';
import { ActivatedRoute } from '@angular/router'; // proporciona informacion sobre la ruta activada
//import { IonItem, IonLabel, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listado-dispositivos',
  templateUrl: './listado-dispositivos.page.html',
  styleUrls: ['./listado-dispositivos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel]
})
export class ListadoDispositivosPage implements OnInit {
  dispositivos: any = [];

  constructor(private _dispositivoService: DispositivoService,
    private _actRouter: ActivatedRoute) { }

  ngOnInit() {
    this._dispositivoService.getDispositivos()
      .then(data => {
        this.dispositivos = data;
      })
      .catch(error => {
        console.error(error);
      });
  }

}
