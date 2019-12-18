import { Component, OnInit, ViewChild } from '@angular/core';
import { Cargo } from './cargo-model';
import { Setor } from 'app/setor/setor-model';
import { Services } from 'app/providers/services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'mt-cargo',
  templateUrl: './cargo-page.html'
})
export class CargoController implements OnInit {
  @ViewChild('form') form:NgForm
  setores: Array<Setor> = []


  constructor(private service:Services) { }

  ngOnInit() {
    this.service.getSetores().subscribe((data:Array<Setor>)=>{
      this.setores = data
    })
  }
  submit(form: any){
    form.setor = this.setores.find((setor)=>{return form.setor === setor._id})
    this.service.createCargo(form).subscribe(data=>{
      window.location.reload()
      console.log(data)
    })

  }

}
