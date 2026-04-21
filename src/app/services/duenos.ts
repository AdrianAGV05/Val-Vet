import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Dueno } from '../models/Dueno';

@Injectable({
  providedIn: 'root',
})

export class DuenoService{
    constructor(private _http:HttpClient){}
      public addDuenos(dueno:Dueno):Observable<any>{
        return this._http.post('http://localhost:8081/api/dueno', dueno,{observe:'response'});
      }
      public getDatosDuenos():Observable<any>{
        return this._http.get('http://localhost:8081/api/dueno',{observe:'response'});
      }
      public deleteDatosDuenos(duenoId:string):Observable<any>{
        return this._http.delete('http://localhost:8081/api/dueno/'+duenoId,{observe:'response'});
      }
      public updateDatosDuenos(duenoId:string, dueno:Dueno):Observable<any>{
        return this._http.put('http://localhost:8081/api/dueno'+duenoId,dueno,{observe:'response'});
      }

}