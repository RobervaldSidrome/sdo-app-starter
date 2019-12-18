import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Services } from 'app/providers/services';
import { Route, Params, Router, ActivatedRoute } from '@angular/router';
import { Nivel } from './nivel-model';

@Component({
  selector: 'mt-edit-nivel',
  templateUrl: './edit-nivel-page.html',
  styleUrls:['./edit-nivel-style.css']
})
export class EditNivelController implements OnInit {
  @ViewChild('form') form:NgForm
  id: string
  nivel: Nivel = { nome:"", createdAt:"",updatedAt:"",_id:"" }
  constructor(private service:Services, private route:ActivatedRoute, private routes:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id
    this.service.getNiveis(this.id).subscribe((data:Nivel)=>{
      console.log(this.nivel.nome)
      this.nivel = data
    })
  }
 
  submit(form:Nivel){
    this.service.putNivel(this.id,form).subscribe(data=>{
      this.routes.navigateByUrl('/nivel')
    }, err=>{
      console.log(err)
    })
    
    
  }

}
