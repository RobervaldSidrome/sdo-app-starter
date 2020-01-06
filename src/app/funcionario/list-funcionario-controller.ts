import { Component, OnInit } from '@angular/core';
import { Funcionario } from './funcionario-model'
import { Services } from 'app/providers/services';
import { Salario } from 'app/salario/salario-model';
import 'rxjs/add/operator/toPromise'
import { Router } from '@angular/router';
import { FuncionarioService } from './funcionario.service';

@Component({
  selector: 'mt-list-funcionario',
  templateUrl: './list-funcionario-page.html',
  styleUrls:['./list-funcionario-style.css']
})
export class ListFuncionarioController implements OnInit {
  cargoNiveis: Array<Salario> = []
  tempFuncionario: Array<any>
  funcionarios: Array<any> = []
  constructor(private service:Services, private route:Router, private funcionarioService:FuncionarioService) { }

  ngOnInit() {
    this.getFuncionarios()
  }
  getFuncionarios(){
    this.service.getFuncionarios().subscribe((data: any)=>{
      this.funcionarios = data
      this.funcionarios.map(func=>{
        console.log(this.funcionarios)
        if(func.cargoNivel){
          func.cargo = func.cargoNivel.cargo?func.cargoNivel.cargo.nome:"Não Atribuído"
          func.nivel = func.cargoNivel.nivel?func.cargoNivel.nivel.nome:"Não Atribuído"
          func.salario = func.cargoNivel.salario?func.cargoNivel.salario:""
        }
        else{
          func.cargo = "Não Atribuído"
          func.nivel = "Não Atribuído"
          func.salario = ""
        }
        console.log(this.funcionarios)
      })
    })

  }
  delete(id){
    this.service.deleteFuncionario(id).subscribe(data=>{
      this.getFuncionarios()
    })
  }
  navigate(funcionario: Funcionario){
    if(funcionario.cargoNivel && funcionario.cargoNivel.cargo && funcionario.cargoNivel.nivel){
    this.funcionarioService.funcionario = funcionario
    }
    this.route.navigate(['/funcionario',funcionario._id])
    
  }


}
