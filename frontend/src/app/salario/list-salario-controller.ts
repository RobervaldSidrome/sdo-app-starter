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
  salarios: Array<Object> = []
  constructor(private service:Services) { }

  ngOnInit() {
    this.getSalarios()
  }
  getSalarios(){
    this.service.getSalarios().subscribe((data:Array<Salario>)=>{
      console.log(data)
      this.salarios = data
    })
  }
  delete(id){
    this.service.deleteSalario(id).subscribe(data=>{
      this.getSalarios()
    })
    
  }


}
