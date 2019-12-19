import { Component, OnInit, ViewChild } from '@angular/core';
import { Services } from 'app/providers/services';
import { NgForm } from '@angular/forms';
import { Cargo } from 'app/cargo/cargo-model';
import { Nivel } from 'app/nivel/nivel-model';

@Component({
  selector: 'mt-salario',
  templateUrl: './salario-page.html',
  styleUrls: ['./salario-style.css']
})
export class SalarioController implements OnInit {
  @ViewChild('form') form:NgForm
  cargos: Array<Cargo> = []
  niveis: Array<Nivel> = []


  constructor(private service:Services) { }

  ngOnInit() {
    this.service.getCargos().subscribe((data:Array<Cargo>)=>{
      this.cargos = data
    })
    this.service.getNiveis().subscribe((data:Array<Nivel>)=>{
      this.niveis = data
    })
  }
  submit(form: any){
    this.service.createSalario(form).subscribe(data=>{
      window.location.reload()
    })

  }

}
