import { Setor } from "app/setor/setor-model";

class Cargo{
    constructor(
        public _id: string,
        public nome: string,
        public descricao: string,
        public setor: Setor,
        public createdAt: string,
        public updatedAt: string
    ){}
}

export {Cargo}