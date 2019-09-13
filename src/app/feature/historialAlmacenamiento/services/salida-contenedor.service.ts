import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SalidaContenedorService {

  private ULDENPOINT: string = environment.urlActualizacionHistorialAlmacenamiento;
  constructor(private http: HttpClient) { }

  salida(codigo:string): Observable<any> {
    let salidaHistorial: Observable<Object>;
   salidaHistorial = this.http.put(`${this.ULDENPOINT}/${codigo}`, null).pipe(
      catchError(e => {
        console.log(e.error.mensaje);
        swal.fire("Error salida", e.error.mensaje, "error");
        return throwError(e);
      })
    )
    return salidaHistorial;
  }
}
