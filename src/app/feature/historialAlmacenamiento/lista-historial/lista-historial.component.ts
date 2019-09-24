import { Component, OnInit, OnDestroy, AfterContentInit, ViewChild } from '@angular/core';
import { ListarHistorialService } from '../services/listar-historial.service';
import { SalidaContenedorService } from '../services/salida-contenedor.service';

import swal from 'sweetalert2';
import { Subject, Subscription } from 'rxjs';
import { ConsultarHistorialService } from '../services/consultar-historial.service';
import { Router } from '@angular/router';
import { CrearHistorialService } from '../services/crear-historial.service';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.css']
})
export class ListaHistorialComponent implements OnInit, OnDestroy{
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>;

  dataSubscription: Subscription;

  historiales: any[];

  constructor(private listaHistorialServices : ListarHistorialService,
    private salidaService : SalidaContenedorService, private router:Router,
    private consultarService: ConsultarHistorialService,
    private crearHistorialService: CrearHistorialService) { 
      this.dtTrigger = new Subject();     

      this.dataSubscription = this.crearHistorialService.getSujeto.subscribe(()=> {     
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });  
        this.listarHistoriales();
      });

      this.dataSubscription = this.salidaService.obtenerObjeto.subscribe(()=> {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });  
        this.listarHistoriales();
      });                  
    }
  
  ngOnInit() { 
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      responsive:true
    }; 
    this.listarHistoriales();
  } 

  listarHistoriales(){     
    this.listaHistorialServices.listarContenedoresAlmacenados()
    .subscribe(historial => {
      this.historiales= historial;   
      this.dtTrigger.next();   
    });   
  }


  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }

  salidaContenedor(codigoContenedor: string){
    this.salidaService.salida(codigoContenedor).subscribe((response) =>{
      swal.fire('Salida contenedor',`El contenedor con codigo: ${response.codigo} ha salido exitosamente, el valor a pagar es: $${response.pago}`, 'success');
    })
  }
  consultar(codigo: string){
    this.consultarService.consultar(codigo);
  }
}
