import { Component, OnInit, ViewChild } from '@angular/core';
import { Services } from 'app/providers/services';
import { Nivel } from './nivel-model';

@Component({
  selector: 'mt-list-nivel',
  templateUrl: './list-nivel-page.html',
  styleUrls:['./list-nivel-style.css']
})
export class ListNivelController implements OnInit {
  niveis: Array<Nivel> = []
  constructor(private service:Services) { }

  ngOnInit() {
    this.getNiveis()
  }
  getNiveis(){
    this.service.getNiveis().subscribe((data:Array<Nivel>)=>{
      this.niveis = data
    })
  }
  delete(id){
    this.service.deleteNivel(id).subscribe(data=>{
      this.getNiveis()
    })
    
  }


}
