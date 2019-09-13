import { Component, OnInit } from '@angular/core';
import { ListarHistorialService } from '../services/listar-historial.service';
import { SalidaContenedorService } from '../services/salida-contenedor.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.css']
})
export class ListaHistorialComponent implements OnInit {

  historiales: any[];
  constructor(private listaHistorialServices : ListarHistorialService,
    private salidaService : SalidaContenedorService) { }

  ngOnInit() {
    this.listaHistorialServices.listarContenedoresAlmacenados()
      .subscribe(historial => this.historiales= historial);         
  }

  salidaContenedor(codigoContenedor: string){
    this.salidaService.salida(codigoContenedor).subscribe((response) =>{
      swal.fire('Nuevo cliente',`El contenedor con codigo: ${response.codigo} ha salido exitosamente`, 'success').then(
        function(){
          window.location.reload();
        }
      )
    })
  }
}
