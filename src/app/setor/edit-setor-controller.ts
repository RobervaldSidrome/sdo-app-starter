import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Setor } from './setor-model'
import { Services } from 'app/providers/services';
import { Route, Params, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-edit-setor',
  templateUrl: './edit-setor-page.html',
  styleUrls:['./edit-setor-style.css']
})
export class EditSetorController implements OnInit {
  @ViewChild('form') form:NgForm
  id: string
  setor: Setor = { _id:"",nome:"",descricao:"",createdAt:"",updatedAt:"" }
  constructor(private service:Services, private route:ActivatedRoute, private routes:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id
    this.service.getSetores(this.id).subscribe((data:Setor)=>{
      this.setor = data
    })
  }
  submit(form:Setor){
    this.service.putSetor(this.id,form).subscribe(data=>{
      this.routes.navigateByUrl('/setor')
    }, err=>{
      console.log(err)
    })
    
    
  }

}
