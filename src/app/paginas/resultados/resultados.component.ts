import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionService } from 'src/app/service/peticion.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  @ViewChild("img1")
  im1!: ElementRef<HTMLImageElement>;

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

  archivos:any = [];

  constructor(private peticionService:PeticionService, private router:Router, private render2:Renderer2) { }

  ngOnInit(): void {
    this.getProducto();
    this.getPeticion();
    this.archivos = this.producto.archivos;
    

  }

  public getPeticion(){
    this.peticion = this.peticionService.getPeticion();
  }


  public getProducto(){
    this.producto = this.peticionService.getProducto();
    
  }

  public img(){
    let ima = this.im1.nativeElement;
    let base = "data:image/jpeg;base64,"+this.archivos[0].ruta
    
    this.render2.setProperty(ima, 'src', base)
  }


  public guardarCliente(){
    
    this.peticion.cliente = this.cliente;
    this.peticion.id = this.producto.idPeticion;
    this.peticionService.setCliente(this.cliente);
    console.log(this.peticion)
    this.peticionService.enviarCliente(this.peticion).subscribe(
      (data:any)=>{

        console.log(data);
        this.router.navigate(['datos-usuario']);
      }
    );
    
    
  }


}
