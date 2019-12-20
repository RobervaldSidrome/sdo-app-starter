import { Injectable } from "@angular/core";
import { Funcionario } from "./funcionario-model";

@Injectable()
export class FuncionarioService{
    funcionario:Funcionario
    constructor(){
    }

}