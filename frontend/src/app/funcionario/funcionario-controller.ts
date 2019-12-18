import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Services } from 'app/providers/services';
import { Cargo } from 'app/cargo/cargo-model';
import { Nivel } from 'app/nivel/nivel-model';
import { Funcionario } from './funcionario-model';
import { Salario } from 'app/salario/salario-model';

@Component({
  selector: 'mt-funcionario',
  templateUrl: './funcionario-page.html',
  styleUrls:['./funcionario-style.css']
})
export class FuncionarioController implements OnInit {
  @ViewChild('form') form:NgForm
  cargos: Array<Cargo> = []
  niveis: Array<any> = []
  cargoNiveis: Array<any> = []
  selectedCargo: Cargo
  selectedNivel: Nivel
  selectedCargoNivel: Salario
  constructor(private service:Services) { }

  ngOnInit() {
    this.service.getCargos().subscribe((data: Array<Cargo>)=>{
      this.cargos = data
    })
  }
  getNiveis(){
    this.service.getSalarios("",`cargo=${this.selectedCargo._id}`).subscribe((data: Array<any>)=>{
      this.niveis = data.map(element=>element = element.nivel)
    }) 
  }

  setCargoNivel(){
    this.service.getSalarios("",`cargo=${this.selectedCargo._id}&nivel=${this.selectedNivel._id}`).subscribe((data:Salario)=>{
      this.selectedCargoNivel = data
    })
  }
  submit(form: any){
    const funcionario: Funcionario = {matricula:form.matricula,nome:form.nome,cargonivel:this.selectedCargoNivel,email:form.email}
    console.log(funcionario)

  }

}
