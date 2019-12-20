import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BASE_URL} from '../../environments/environment'
import { AuthService } from './auth';




// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class Services {

  constructor(private http:HttpClient,private auth:AuthService ) {
      
  }

  createSetor(setor: any){
    return this.auth.post(BASE_URL + 'setor', setor)
  }
  getSetores(id?: string, query?:string){
    let url = BASE_URL + 'setor'
    if(id){
      url = url + `/${id}`
    }
    if(query){
      url = url + `?${query}`
    }
    return this.auth.get(url)
  }
  deleteSetor(id: string){
    return this.auth.delete(BASE_URL + `setor/${id}`)
  }
  putSetor(id: string,data: any){
    return this.auth.put(BASE_URL + `setor/${id}`,data)
  }

  createCargo(Cargo: any){
    return this.auth.post(BASE_URL + 'cargo', Cargo)
  }
  getCargos(id?: string){
    let url = BASE_URL + 'cargo'
    if(id){
      url = url + `/${id}`
    }
    return this.auth.get(url + '?populate=setor')
  }
  deleteCargo(id: string){
    return this.auth.delete(BASE_URL + `cargo/${id}`)
  }
  putCargo(id: string,data: any){
    return this.auth.put(BASE_URL + `cargo/${id}`,data)
  }

  createSalario(Salario: any){
    return this.auth.post(BASE_URL + 'cargonivel', Salario)
  }
  getSalarios(id?: string, query?: string){
    let url = BASE_URL + 'cargonivel'
    if(id){
      url = url + `/${id}`
    }
    if(query){
      url = url + `?${query}`
      return this.auth.get(url + '&populate=cargo' + '&populate=nivel')
    }
    return this.auth.get(url + '?populate=cargo' + '&populate=nivel')
  }
  deleteSalario(id: string){
    return this.auth.delete(BASE_URL + `cargonivel/${id}`)
  }
  putSalario(id: string,data: any){
    return this.auth.put(BASE_URL + `cargonivel/${id}`,data)
  }

  createNivel(Nivel: any){
    return this.auth.post(BASE_URL + 'nivel', Nivel)
  }
  getNiveis(id?: string){
    let url = BASE_URL + 'nivel'
    if(id){
      url = url + `/${id}`
    }
    return this.auth.get(url)
  }
  deleteNivel(id: string){
    return this.auth.delete(BASE_URL + `nivel/${id}`)
  }
  putNivel(id: string,data: any){
    return this.auth.put(BASE_URL + `nivel/${id}`,data)
  }

  createFuncionario(Funcionario: any){
    return this.auth.post(BASE_URL + 'funcionario', Funcionario)
  }
  getFuncionarios(id?: string, query?: string){
    let url = BASE_URL + 'funcionario'
    if(id){
      url = url + `/${id}`
    }
    if(query){
      url = url + `?${query}`
      return this.auth.get(url)
    }
    return this.auth.get(url)
  }
  deleteFuncionario(id: string){
    return this.auth.delete(BASE_URL + `funcionario/${id}`)
  }
  putFuncionario(id: string,data: any){
    return this.auth.put(BASE_URL + `funcionario/${id}`,data)
  }
  

}