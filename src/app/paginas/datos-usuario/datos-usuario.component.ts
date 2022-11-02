import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionService } from 'src/app/service/peticion.service';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.css']
})
export class DatosUsuarioComponent implements OnInit {

  constructor(private router:Router, private productoService:PeticionService) { }


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
  ngOnInit(): void {
    this.producto = this.productoService.getProducto();
    this.cliente = this.productoService.getCliente();
  }


  public whatsapp(){
    let url = "https://api.whatsapp.com/send?phone=573105183717&text=Hola%2C%20mi%20nombre%20es%20"+this.cliente.nombre+"%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20producto%20"+this.producto.nombre
    window.location.href = url
  }
 
}
