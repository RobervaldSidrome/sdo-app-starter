import { Salario } from "app/salario/salario-model";

class Funcionario{
    constructor(
        public _id: string,
        public matricula: number,
        public nome: string,
        public cargoNivel: Salario,
        public email: string

    ){}
}

export {Funcionario}