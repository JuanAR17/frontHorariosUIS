import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public dataAsign:string = 'http://100.80.184.106:8080/api/asignaturas'

  constructor(private http:HttpClient) { }
  
  public getDataAsign():Observable<any>{
    return this.http.get<any>(this.dataAsign)
  }

  public delAsignId(id:number):Observable<{}>{
     this.dataAsign = `${this.dataAsign}/${id}`;
     console.log(`se elimino ${id}`)
     return this.http.delete(this.dataAsign);
  }

}
