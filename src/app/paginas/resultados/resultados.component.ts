import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionService } from 'src/app/service/peticion.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {


  producto = {
    id:0,
    nombre:'',
    referencia:'',
    archivos: [],
    idPeticion:''
  }


  cliente = {
    nombre:'',
    email:'',
    celular:''
  }

  peticion = {
    id:'',
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

  constructor(private peticionService:PeticionService, private router:Router) { }

  ngOnInit(): void {
    this.getProducto();
    this.getPeticion();
  }

  public getPeticion(){
    this.peticion = this.peticionService.getPeticion();
  }


  public getProducto(){
    this.producto = this.peticionService.getProducto();
  }


  public guardarCliente(){
    
    this.peticion.cliente = this.cliente;
    this.peticion.id = this.producto.idPeticion;
    console.log(this.peticion)
    this.peticionService.enviarCliente(this.peticion).subscribe(
      (data:any)=>{

        console.log(data);
        this.router.navigate(['datos-usuario']);
      }
    );
    
    
  }


}
