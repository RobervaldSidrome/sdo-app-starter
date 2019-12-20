import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Services } from 'app/providers/services';
import { Cargo } from 'app/cargo/cargo-model';
import { Nivel } from 'app/nivel/nivel-model';
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
  
  checkNiveis(){
    if(this.niveis.length>0){
      return false
    }
    return true
  }

  setCargoNivel(){
    this.service.getSalarios("",`cargo=${this.selectedCargo._id}&nivel=${this.selectedNivel._id}`).subscribe((data:Salario)=>{
      this.selectedCargoNivel = data[0]._id
    })
  }
  submit(form: any){
    const funcionario: any = {matricula:form.matricula,nome:form.nome,cargoNivel:this.selectedCargoNivel,email:form.email}
    this.service.createFuncionario(funcionario).subscribe(data=>{
    })
  }

}
