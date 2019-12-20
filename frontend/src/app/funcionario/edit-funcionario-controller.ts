import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Services } from 'app/providers/services';
import { Cargo } from 'app/cargo/cargo-model';
import { Nivel } from 'app/nivel/nivel-model';
import { Funcionario } from './funcionario-model';
import { Salario } from 'app/salario/salario-model';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from './funcionario.service';

@Component({
  selector: 'mt-edit-funcionario',
  templateUrl: './edit-funcionario-page.html',
  styleUrls:['edit-funcionario-style.css']
})
export class EditFuncionarioController implements OnInit {
  @ViewChild('form') form:NgForm
  id: string
  cargos: Array<Cargo> = []
  niveis: Array<any> = []
  cargoNiveis: Array<any> = []
  selectedCargo: Cargo = {nome:"",descricao:"", setor:undefined, _id:"", createdAt:"", updatedAt:""}
  selectedNivel: Nivel = {nome:"", _id:"", createdAt:"", updatedAt:""}
  cargoNivel: Salario = {cargo:this.selectedCargo,salario:NaN,nivel:this.selectedNivel,_id:"",createdAt:"",updatedAt:""}
  funcionario: Funcionario = {nome:"",_id:"",email:"",cargoNivel:this.cargoNivel,matricula:NaN}
  
  selectedCargoNivel: Salario
  constructor(private service:Services, private route:ActivatedRoute, private funcionarioService:FuncionarioService, private routes:Router) {
    this.id = this.route.snapshot.params.id
    if(this.funcionarioService.funcionario==undefined){
      this.getFuncionario()
    }
    else{
    this.funcionario = this.funcionarioService.funcionario
    this.selectedCargo = this.funcionario.cargoNivel.cargo
    this.getNiveis()
    this.selectedNivel = this.funcionario.cargoNivel.nivel
    this.setCargoNivel()
    }
  }
  compareId(item1: any,item2: any){
    if(item1 && item2){
    return item1._id === item2._id
    }
  }

  ngOnInit() {
    this.service.getCargos().subscribe((data: Array<Cargo>)=>{
      this.cargos = data
    })
    
  }
  getFuncionario(){
    this.service.getFuncionarios(this.id).subscribe((data:Funcionario)=>{
      this.funcionario = data
      if(this.funcionario.cargoNivel){
        this.selectedCargo = this.funcionario.cargoNivel.cargo?this.funcionario.cargoNivel.cargo:this.selectedCargo
        this.getNiveis()
        this.selectedNivel = this.funcionario.cargoNivel.nivel?this.funcionario.cargoNivel.nivel:this.selectedNivel
        if(this.funcionario.cargoNivel.cargo && this.funcionario.cargoNivel.nivel) this.setCargoNivel()
      }
    })
  }
  
  getNiveis(){
    this.niveis = []
    this.service.getSalarios("",`cargo=${this.selectedCargo._id}`).subscribe((data: Array<any>)=>{
      for(let nivel of data){
        if(nivel.nivel){
          this.niveis.push(nivel.nivel)
        }
      }
    })
    console.log(this.niveis)
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
    this.service.putFuncionario(this.id,funcionario).subscribe(data=>{
      this.routes.navigate(['/funcionario'])
    })
  }

}
