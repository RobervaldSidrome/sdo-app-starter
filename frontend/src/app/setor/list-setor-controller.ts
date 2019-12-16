import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Setor } from './setor-model'
import { Services } from 'app/providers/services';

@Component({
  selector: 'mt-list-setor',
  templateUrl: './list-setor-page.html',
  styleUrls:['./list-setor-style.css']
})
export class ListSetorController implements OnInit {
  setores: Array<Object> = []
  constructor(private service:Services) { }

  ngOnInit() {
    this.getSetores()
  }
  getSetores(){
    this.service.getSetores().subscribe((data:Array<Setor>)=>{
      this.setores = data
    })
  }
  delete(id){
    console.log('entrou')
    this.service.deleteSetores(id).subscribe(data=>{
      this.getSetores()
    })
    
  }


}
