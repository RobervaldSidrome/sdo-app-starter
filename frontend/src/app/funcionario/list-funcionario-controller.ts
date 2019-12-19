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
  async getFuncionarios(){
    const salarios = await this.service.getSalarios().toPromise() as Array<Salario>
    this.service.getFuncionarios().subscribe((data:Array<Funcionario>)=>{
      this.funcionarios = data
      for(let func of this.funcionarios){
        if(func.cargoNivel){
          func.cargoNivel = salarios.find(sal=> sal._id === func.cargoNivel._id)
          func.cargo = func.cargoNivel.cargo?func.cargoNivel.cargo.nome:"Não Atribuído"
          func.nivel = func.cargoNivel.nivel?func.cargoNivel.nivel.nome:"Não Atribuído"
        }else{
            func.cargo = "Não atribuído"
            func.nivel = "Não atribuído"
        }
      }
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
