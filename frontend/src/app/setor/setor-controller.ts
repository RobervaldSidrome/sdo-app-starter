import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Setor } from './setor-model'
import { Services } from 'app/providers/services';

@Component({
  selector: 'mt-setor',
  templateUrl: './setor-page.html',
  styleUrls:['./setor-style.css']
})
export class SetorController implements OnInit {
  @ViewChild('form') form:NgForm
  constructor(private service:Services) { }

  ngOnInit() {
  }
  submit(form:Setor){
    this.service.createSetor(form).subscribe(data=>{
      window.location.reload()
    }, err=>{
      console.log(err)
    })
    
    
  }

}
