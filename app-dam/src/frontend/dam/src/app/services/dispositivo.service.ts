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
    //firstValueFrom convierte un observable en una promesa
    return firstValueFrom(this._http.get('http://localhost:8000/dispositivo'))
  }

  // Metodo para obtener las mediciones de un dispositivo
  getMedicionesPorId(id: any) {
    return firstValueFrom(this._http.get<any>(`http://localhost:8000/dispositivo/${id}/mediciones`));
  }


  getDispositivoPorId(id: any) {
    return firstValueFrom(this._http.get<any>(`http://localhost:8000/dispositivo/${id}`));
  }

  // Método para insertar una medición
  insertarMedicion(dispositivoId: any, valor: any) {
    const body = { dispositivoId, valor };
    return firstValueFrom(this._http.post('http://localhost:8000/dispositivo/mediciones', body));
  }

  //Metodo pra insertar registro de riegos
  insertarLogRiego(apertura: any, electrovalvulaId: any) {
    const body = { apertura, electrovalvulaId };
    return firstValueFrom(this._http.post('http://localhost:8000/dispositivo/log_riegos', body));
  }

}
