import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Services } from 'app/providers/services';
import { Salario } from 'app/salario/salario-model';

@Component({
  selector: 'mt-list-salario',
  templateUrl: './list-salario-page.html',
  styleUrls:['./list-salario-style.css']
})
export class ListSalarioController implements OnInit {
  salarios: Array<any> = []
  constructor(private service:Services) { }

  ngOnInit() {
    this.getSalarios()
  }
  getSalarios(){
    this.service.getSalarios().subscribe((data:Array<Salario>)=>{
      this.salarios = data
      for(let salario of this.salarios){
        salario.cargo = salario.cargo?salario.cargo.nome:"Não atribuído"
        salario.nivel = salario.nivel?salario.nivel.nome:"Não Atribuído"
      }
    })
  }
  delete(id){
    this.service.deleteSalario(id).subscribe(data=>{
      this.getSalarios()
    })
    
  }


}
