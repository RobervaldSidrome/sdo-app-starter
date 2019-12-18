import { Component, OnInit, ViewChild } from '@angular/core';
import { Services } from 'app/providers/services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'mt-nivel',
  templateUrl: './nivel-page.html'
})
export class NivelController implements OnInit {
  @ViewChild('form') form:NgForm



  constructor(private service:Services) { }

  ngOnInit() {
    
  }
  submit(form: any){
    this.service.createNivel(form).subscribe(data=>{
      window.location.reload()
      console.log(data)
    })

  }

}
