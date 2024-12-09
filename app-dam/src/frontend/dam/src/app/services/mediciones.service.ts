import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Dispositivo } from '../interfaces/dispositivo';

@Injectable({
  providedIn: 'root'
})
export class MedicionesService {

  constructor(private _http: HttpClient) { }

  // Metodo para obtener las mediciones de un dispositivo
  getMedicionesPorId(id: any) {
    return firstValueFrom(this._http.get<any>(`http://localhost:8000/dispositivo/${id}/mediciones`));
  }

  // Método para insertar una medición
  insertarMedicion(dispositivoId: any, valor: any) {
    const body = { dispositivoId, valor };
    return firstValueFrom(this._http.post('http://localhost:8000/dispositivo/mediciones', body));
  }


}
