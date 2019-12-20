import { Cargo } from "app/cargo/cargo-model";
import { Nivel} from "app/nivel/nivel-model"

class Salario{
    constructor(
        public cargo: Cargo,
        public nivel: Nivel,
        public salario: number,
        public _id: string,
        public createdAt: string,
        public updatedAt: string
    ){}
}
export {Salario}