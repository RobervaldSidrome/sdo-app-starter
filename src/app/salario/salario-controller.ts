import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'mt-salario',
  templateUrl: './salario-page.html',
  styleUrls:['./salario-style.css']
})
export class SalarioController implements OnInit {

  constructor(private fb: FormBuilder) { }

  avancoObraForm: FormGroup;

  ngOnInit() {
    this.avancoObraForm = this.fb.group({
      numeroObra: this.fb.control('', [Validators.required]),
      subObra: this.fb.control('', [Validators.required]),
      processo: this.fb.control('', [Validators.required]),
      data: this.fb.control('', [Validators.required]),
      hora: this.fb.control('', [Validators.required]),
      statusObra: this.fb.control('', [Validators.required]),
      turno: this.fb.control('', [Validators.required])
    })
  }

}
