import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Dispositivo } from '../interfaces/dispositivo';

@Injectable({
  providedIn: 'root'
})
export class MedicionesService {

  constructor(private _http: HttpClient) { }

  postMediciones() {

  }
}
