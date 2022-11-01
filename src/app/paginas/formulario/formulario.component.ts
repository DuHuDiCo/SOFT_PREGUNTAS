import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionService } from 'src/app/service/peticion.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  

  @Input() valid = true;
  @Input() peticion:any;
  
  constructor(private router:Router, private preguntasService:PeticionService) { }

  ngOnInit(): void {
  }

  getMensaje(e:any){
    this.valid = e;
    
    setTimeout(() => {
      this.router.navigate(['resultados']);
    }, 5000);
  }

  getPeticion(e:any){
    this.peticion = e;
    
    this.preguntasService.enviarDatos(this.peticion).subscribe(
      (data:any)=>{
        this.getMensaje(false);            
        this.preguntasService.setProducto(data);
      },(error:any)=>{
        console.log(error);
      }
    );
  }


  
}
