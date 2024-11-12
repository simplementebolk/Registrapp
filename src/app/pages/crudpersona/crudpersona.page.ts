import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { CrudpersonaService } from 'src/app/servicios/crudpersona.service';

@Component({
  selector: 'app-crudpersona',
  templateUrl: './crudpersona.page.html',
  styleUrls: ['./crudpersona.page.scss'],
})

export class CrudpersonaPage implements OnInit {

  constructor(private cp:CrudpersonaService) { }

  persona:Persona={nombre:'',apellido:'',correo:'',tipo_usuario:''}
  nueva_persona:Persona={id:'',nombre:'',apellido:'',correo:'',tipo_usuario:''}
  lista_personas:Persona[]=[]

  ngOnInit() {
    this.listar()
  }

  modificar(persona: Persona) {
    this.nueva_persona = persona;
  }
  
  modificarPersona() {
    this.cp.modificar(this.nueva_persona).then(() => {
      alert("Persona actualizada correctamente");
    }).catch((err) => {
      console.log(err);
    });
  }
  
  
 
  eliminar(id:any){
    this.cp.eliminar(id).then(()=>{
      alert("elimino correctamente")
    }).catch((err)=>{
      console.log(err)
    })
  }

  listar(){
    this.cp.listar().subscribe(data=>{
      this.lista_personas=data
    })
  }

  grabar(){
    this.cp.grabar(this.persona).then(()=>{
      alert("grabo")
    }).catch((err)=>{
      console.log(err);
    })
  }

}
