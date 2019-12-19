import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cargo } from './cargo-model'
import { Services } from 'app/providers/services';
import { Router, ActivatedRoute } from '@angular/router';
import { Setor } from 'app/setor/setor-model';

@Component({
  selector: 'mt-edit-cargo',
  templateUrl: './edit-cargo-page.html',
  styleUrls:['./edit-cargo-style.css']
})
export class EditCargoController implements OnInit {
  @ViewChild('form') form:NgForm
  id: string
  setores: Array<Setor> = []
  setor: Setor = {nome: "", descricao:"", _id: "", createdAt:"", updatedAt:""}
  cargo: Cargo = {nome: "", descricao:"", _id: "", createdAt:"", updatedAt:"", setor:this.setor}
  constructor(private service:Services, private route:ActivatedRoute, private routes:Router) { }

  ngOnInit() {
    
    this.id = this.route.snapshot.params.id
    this.service.getCargos(this.id).subscribe((data:Cargo)=>{
      this.cargo = data
      this.setor = data.setor
    })
    this.service.getSetores().subscribe((data:Array<Setor>)=>{
      this.setores = data
    })
  }
  compareId(item1: Setor,item2: Setor){
    if(item1 && item2) return item1._id === item2._id

  }
  submit(form:Cargo){
    this.service.putCargo(this.id,form).subscribe(data=>{
      this.routes.navigateByUrl('/cargo')
    }, err=>{
    })
    
    
  }

}
