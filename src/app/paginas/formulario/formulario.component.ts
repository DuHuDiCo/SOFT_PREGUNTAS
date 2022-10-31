import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  

  @Input() valid = true;

  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getMensaje(e:any){
    this.valid = e;
    setTimeout(() => {
      this.router.navigate(['datos-usuario']);
    }, 5000);
  }

}
