class Avanco{
    constructor(
        public obra: Obra[] = [],
        public subobra: SubObra[] = [],
        public processo: Processo[] = [],
        public data: Date,
        public hora: string,
        public statusObra: StatusObra[] = [],
        public turno: Turno[] = [],
        public percentualAvanco: number,
        public valorObraHora: number
    ){}
}

class Obra{
    constructor(public obra){}
}

class SubObra{
    constructor(public subobra){}
}

class StatusObra{
    constructor(public statusObra){}
}

class Processo{
    constructor(public processo){}
}

class Turno{
    constructor(public turno){}
}

export {Avanco}