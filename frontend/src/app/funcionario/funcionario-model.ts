import { Salario } from "app/salario/salario-model";

class Funcionario{
    constructor(
        public matricula: number,
        public nome: string,
        public cargonivel: Salario,
        public email: string

    ){}
}

export {Funcionario}