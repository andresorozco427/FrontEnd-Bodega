import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import { Observable, throwError, Subject } from 'rxjs';
import swal  from  'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CrearHistorialService { 
  constructor(private http: HttpClient) { }

  private URLENDPOINT: string = environment.urlCreacionDeHistorialAlmacenamiento;
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});  

  private _Sujeto = new Subject<any>();

  get getSujeto(){
    return this._Sujeto;
  }

  create(contenedor: any) : Observable<any>{
    let resultado: Observable<Object>
    resultado = this.http.post(this.URLENDPOINT, contenedor, {headers: this.httpHeaders}).pipe(
      tap(() => this._Sujeto.next()),
      catchError(e => {
        console.log(e.error.mensaje);
        swal.fire("Error al guardar", e.error.mensaje, "error");
        return throwError(e);
      }),
     )
     return resultado;
  }


}
