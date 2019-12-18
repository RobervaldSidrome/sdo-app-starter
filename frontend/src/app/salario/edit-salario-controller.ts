import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Salario } from './salario-model'
import { Services } from 'app/providers/services';
import { Route, Params, Router, ActivatedRoute } from '@angular/router';
import { Setor } from 'app/setor/setor-model';
import { Cargo } from 'app/cargo/cargo-model';
import { Nivel } from 'app/nivel/nivel-model';

@Component({
  selector: 'mt-edit-salario',
  templateUrl: './edit-salario-page.html',
  styleUrls:['./edit-salario-style.css']
})
export class EditSalarioController implements OnInit {
  @ViewChild('form') form:NgForm
  id: string
  cargos: Array<Cargo> = []
  niveis: Array<Nivel> = []
  nivel: Nivel = {nome: "", _id: "", createdAt:"", updatedAt:""}
  setor: Setor = {nome: "", descricao:"", _id: "", createdAt:"", updatedAt:""}
  cargo: Cargo = {nome: "", descricao:"", _id: "", createdAt:"", updatedAt:"", setor:this.setor}
  salario: Salario = {cargo: this.cargo,nivel:this.nivel,salario:NaN,_id:"", createdAt:"",updatedAt:""}
  constructor(private service:Services, private route:ActivatedRoute, private routes:Router) { }

  ngOnInit() {
    
    this.id = this.route.snapshot.params.id
    this.service.getSalarios(this.id).subscribe((data:Salario)=>{
      this.salario = data
    })
    this.service.getCargos().subscribe((data:Array<Cargo>)=>{
      this.cargos = data
    })
    this.service.getNiveis().subscribe((data:Array<Nivel>)=>{
      this.niveis = data
    })
  }
  compareId(item1: any,item2: any){
    return item1._id === item2._id

  }
  submit(form:Salario){
    console.log(form)
    this.service.putSalario(this.id,form).subscribe(data=>{
      console.log(data)
      this.routes.navigateByUrl('/salario')
    }, err=>{
      console.log(err)
    })
    
    
  }

}
