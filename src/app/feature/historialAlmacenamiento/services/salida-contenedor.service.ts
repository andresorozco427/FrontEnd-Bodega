import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SalidaContenedorService {

  private ULDENPOINT: string = environment.urlActualizacionHistorialAlmacenamiento;
  constructor(private http: HttpClient) { }

  private _Sujeto = new Subject<any[]>();

  get obtenerObjeto(){
    return this._Sujeto;
  }

  salida(codigo:string): Observable<any> {
   return this.http.put(`${this.ULDENPOINT}/${codigo}`, null).pipe(
     tap(() => this._Sujeto.next()),
      catchError(e => {
        console.log(e.error.mensaje);
        swal.fire("Error salida", e.error.mensaje, "error");
        return throwError(e);
      })
    )
  }
}
