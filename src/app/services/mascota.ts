import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Mascota } from '../models/mascota';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  constructor(private _http:HttpClient) { }
  
  public addMascota(mascota:Mascota):Observable<any>{
    return this._http.post('http://localhost:8081/api/mascota',mascota ,{observe:'response'});
  }
  public getDatosMascota():Observable<any>{
    return this._http.get('http://localhost:8081/api/mascota',{observe:'response'});
  }
  public deleteDatosMascota(mascotaId:string):Observable<any>{
    return this._http.delete('http://localhost:8081/api/mascota/'+mascotaId,{observe:'response'});
  }
  public updateDatosMascota(mascotaId:string, mascota:Mascota):Observable<any>{
    return this._http.put('http://localhost:8081/api/mascota/'+mascotaId,mascota,{observe:'response'});
  }
}
