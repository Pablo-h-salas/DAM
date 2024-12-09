import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Dispositivo } from '../interfaces/dispositivo';

@Injectable({
  providedIn: 'root'
})
export class LogRiegosService {

  constructor(private _http: HttpClient) { }

  //Metodo pra insertar registro de riegos
  insertarLogRiego(apertura: any, electrovalvulaId: any) {
    const body = { apertura, electrovalvulaId };
    return firstValueFrom(this._http.post('http://localhost:8000/dispositivo/log_riegos', body));
  }

}
