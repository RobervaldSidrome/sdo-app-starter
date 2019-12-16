import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataManager } from './manager';
import { LOGIN_URL } from '../../environments/environment'


// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class AuthService {
    token:string
    constructor(private http:HttpClient, private manager:DataManager ){
        this.setToken()
    }
    isLoggedIn(){
        if(this.token){
            return true
        }
        return false
       
    }
    login(user){
       return this.http.post(LOGIN_URL + 'login', user)
    }
    setToken(){
        this.token = this.manager.getToken()
    }
    get(URL){
        const header = new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': this.token
        })
        console.log(header)
        return this.http.get(URL,{headers:header})
    }
    post(URL,data){
        console.log(this.token)
        const header = new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': this.token
        })
        return this.http.post(URL,data,{headers:header})
    }
    delete(URL){
        const header = new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': this.token
        })
        return this.http.delete(URL,{headers:header})

    }
    put(URL,data){
        const header = new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': this.token
        })
        return this.http.put(URL,data,{headers:header})
    }
}
