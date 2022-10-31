import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  peticion = {
    presupuesto: {
      presupuesto: ''
    },
    categoria: {
      categoria: ''
    },
    vivienda: {
      m2: ''
    },
    integrantes: {
      cantidad: ''
    },
    cliente: {
      nombre: '',
      email: '',
      celular: ''
    },
    autorizacionTratamientoDatos: {
      acepto: false,
      fecha: ''
    }


  }
  valid = true;

  constructor(private toast: NgToastService) { }


  @Output() miEvento = new EventEmitter<boolean>();
  @Output() referencia = new EventEmitter<string>();
  ngOnInit(): void {
  }

  public enviarDatos() {

    if (this.peticion.presupuesto.presupuesto.trim() == '' || this.peticion.presupuesto.presupuesto.trim() == null) {
      this.toast.error({
        detail: "Error",
        summary: "Seleccione una opcion de presupuesto",
        position: "tr",
        duration: 3500
      })


    } else {
      if (this.peticion.categoria.categoria.trim() == '' || this.peticion.categoria.categoria.trim() == null) {
        this.toast.error({
          detail: "Error",
          summary: "Seleccione una opcion de categoria",
          position: "tr",
          duration: 3500
        })
      } else {
        if (this.peticion.integrantes.cantidad.trim() == '' || this.peticion.integrantes.cantidad.trim() == null) {
          this.toast.error({
            detail: "Error",
            summary: "Seleccione una opcion de integrantes",
            position: "tr",
            duration: 3500
          })
        } else {
          if (this.peticion.vivienda.m2.trim() == '' || this.peticion.vivienda.m2.trim() == null) {
            this.toast.error({
              detail: "Error",
              summary: "Seleccione una opcion de vivienda",
              position: "tr",
              duration: 3500
            })
          } else {
            if (this.peticion.autorizacionTratamientoDatos.acepto == false || this.peticion.autorizacionTratamientoDatos.acepto == null) {
              this.toast.error({
                detail: "Error",
                summary: "Seleccione la autorizacion de tratamiento de datos ",
                position: "tr",
                duration: 3500
              })
            } else {

              this.miEvento.emit(this.valid = false);
            }
          }
        }

      }





    }





  }

}
