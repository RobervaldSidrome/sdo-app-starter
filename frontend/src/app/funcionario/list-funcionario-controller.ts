import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Funcionario } from './funcionario-model'
import { Services } from 'app/providers/services';

@Component({
  selector: 'mt-list-funcionario',
  templateUrl: './list-funcionario-page.html',
  styleUrls:['./list-funcionario-style.css']
})
export class ListfuncionarioController implements OnInit {
  funcionarios: Array<Object> = []
  constructor(private service:Services) { }

  ngOnInit() {
    this.getFuncionarios()
  }
  getFuncionarios(){
    this.service.getFuncionarios().subscribe((data:Array<Funcionario>)=>{
      this.funcionarios = data
    })
  }
  delete(id){
    this.service.deleteFuncionario(id).subscribe(data=>{
      this.getFuncionarios()
    })
    
  }


}
