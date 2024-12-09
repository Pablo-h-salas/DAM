import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { DispositivoService } from '../services/dispositivo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,
    CommonModule, FormsModule, IonList, IonItem, IonLabel]
})
export class MedicionesPage implements OnInit {

  mediciones: any = []

  constructor(private _dispositivoService: DispositivoService,
    private _actRouter: ActivatedRoute
  ) { }

  @Input()
  id = '';

  ngOnInit() {

    this._dispositivoService.getMedicionesPorId(Number(this.id))
      .then((data) => {
        console.log(data);
        this.mediciones = data // Se guarda la informacion 
      })
      .catch((error) => {
        console.log(error)
      })
  }

}
