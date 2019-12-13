import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataManager } from './manager';
import {BASE_URL} from '../../environments/environment'


// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class AuthService {
    token:string
    constructor(private http:HttpClient, private manager:DataManager ){
    }
    isLoggedIn(){
        if(this.token){
            return true
        }
        return false
       
    }
    login(user){
       return this.post(BASE_URL + 'login', user)
    }
    setToken(){
        this.token = this.manager.getToken()
    }
    get(URL){
        const header = new HttpHeaders()
        header.append('Content-Type', 'application/json');
        header.append('Authorization',`Bearer ${this.token}`)
        return this.http.get(URL,{headers:header})
    }
    post(URL,data){
        const header = new HttpHeaders()
        header.append('Content-Type', 'application/json');
        header.append('Authorization',`Bearer ${this.token}`)
        return this.http.post(URL,data,{headers:header})
    }
}
