import { Component, OnInit } from '@angular/core';
import { CrearHistorialService } from '../services/crear-historial.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registro-historial',
  templateUrl: './registro-historial.component.html',
  styleUrls: ['./registro-historial.component.css']
})
export class RegistroHistorialComponent implements OnInit {

  contenedor: any = {};

  constructor(private crearHistorialService: CrearHistorialService,
      private router: Router) { }

  ngOnInit() {
  }

  guardar(form: NgForm){    
    this.crearHistorialService.create(form).subscribe(() => {
      swal.fire('Nuevo Historial',`El contenedor con codigo: ${this.contenedor.codigo} ha sido almacenado exitosamente`, 'success');
    });
  }

}
