import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText } from '@ionic/angular/standalone';
import { Observable, Subscription, fromEvent, interval } from 'rxjs';
import { DispositivoService } from '../services/dispositivo.service';
import { ActivatedRoute } from '@angular/router'; // proporciona informacion sobre la ruta activada

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText]
})
//export class DispositivoPage implements OnInit, OnDestroy {
export class DispositivoPage implements OnInit {

  observable$: Observable<any>
  dispositivos: any = []
  valorRandom: number = 0;
  //subscription: Subscription

  mouseMove$ = fromEvent(document, 'mousemove')

  constructor(private _dispositivoService: DispositivoService,
    private _actRouter: ActivatedRoute
  ) {
    this.observable$ = interval(1000)

    // this.subscription = this.mouseMove$.subscribe((evt: any) => {
    //   console.log(`Coords: ${evt.clientX} X ${evt.clientY} Y`)
    // })
    // this.subscription = this.observable$.subscribe((value) => {
    //   console.log(value)
    // })
  }

  // subscribe () {
  //   this.subscription = this.observable$.subscribe((value) => {
  //     console.log(value)
  //   })
  // }

  // unsubscribe () {
  //   this.subscription.unsubscribe()
  // } 

  @Input()
  id = '';

  ionViewWillEnter() {
    console.log(this._actRouter.snapshot.paramMap.get('id'))
  }

  ngOnInit() {
    console.log(this.id)
    //this._dispositivoService.getDispositivos()
    this._dispositivoService.getDispositivoPorId(Number(this.id))
      .then((data) => {
        this.dispositivos = data // Se guarda la informacion 
      })
      .catch((error) => {
        console.log(error)
      })
    console.log(this.dispositivos)

    // Este es el ultimo valor de humedad
    this.valorRandom = Math.floor(Math.random() * 101);
    // Llamar a funcion para que haga el POST en Mediciones
    this._dispositivoService.insertarMedicion(this.id, this.valorRandom)
  }





  //ngOnDestroy() {
  //  this.subscription.unsubscribe()
  //}

}
