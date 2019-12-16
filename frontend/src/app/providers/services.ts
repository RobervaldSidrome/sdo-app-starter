import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user/user.model';
import {BASE_URL} from '../../environments/environment'
import { AuthService } from './auth';



// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class Services {

  constructor(private http:HttpClient,private auth:AuthService ) {
      
  }


  //private BASE_URL = '/api';

  getUsers() {   
    return this.http.get<User[]>(BASE_URL);
  }

  deleteUser(user) {
    return this.http.delete(BASE_URL + user.id);
  }

  updateUser(user){
    return this.http.put(BASE_URL +  user.id, user);
  }

  createUser(user) {
    return this.auth.post(BASE_URL + 'user', user);
  }
  createSetor(setor){
    return this.auth.post(BASE_URL + 'setor', setor)
  }
  getSetores(id?){
    let url = BASE_URL + 'setor'
    if(id){
      url = url + `/${id}`
    }
    return this.auth.get(url)
  }
  deleteSetores(id){
    return this.auth.delete(BASE_URL + `setor/${id}`)
  }
  putSetores(id,data){
    return this.auth.put(BASE_URL + `setor/${id}`,data)
  }

}