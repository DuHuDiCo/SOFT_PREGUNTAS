import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import base from './helper';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

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
  constructor(private http:HttpClient) { }

  public enviarDatos(peticion:any){
    return this.http.post(`${base}/preguntas/save`, peticion);
  }


  public setPeticion(peticion:any){
    this.peticion = peticion;
  }

  public getPeticion(){
    return this.peticion;
  }

  public getProducto(){
    return this.producto
  }

  public setProducto(producto:any){
    this.producto = producto
  }


  public enviarCliente(peticion:any){
    return this.http.put(`${base}/preguntas/update`, peticion);
  }

  public setCliente(cliente:any){
    this.cliente = cliente;
  }

  public getCliente(){
    return this.cliente;
  }






  
}
