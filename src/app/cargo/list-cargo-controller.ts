import { Component, OnInit, ViewChild } from '@angular/core';
import { Cargo } from './cargo-model'
import { Services } from 'app/providers/services';

@Component({
  selector: 'mt-list-cargo',
  templateUrl: './list-cargo-page.html',
  styleUrls:['./list-cargo-style.css']
})
export class ListCargoController implements OnInit {
  cargos: Array<any> = []
  constructor(private service:Services) { }

  ngOnInit() {
    this.getCargos()
  }
  getCargos(){
    this.service.getCargos().subscribe((data:Array<Cargo>)=>{
      this.cargos = data
      this.cargos = this.cargos.map(cargo=>{
        if(cargo.setor==null){
          cargo.setor = {nome:"Não Atribuído"}
          return cargo
        }
        return cargo
      })
    })
  }
  delete(id){
    this.service.deleteCargo(id).subscribe(data=>{
      this.getCargos()
    })
    
  }


}
