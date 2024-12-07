import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Dispositivo } from '../interfaces/dispositivo';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  constructor(private _http: HttpClient) { }
  //Realizar una solicitud HTTP GET a la URL .../8000/dispositivo
  getDispositivos() {
    return firstValueFrom(this._http.get('http://localhost:8000/dispositivo'))
  }
}
