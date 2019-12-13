import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {SDO_API} from '../app.api';
import { User } from '../user/user.model';
import { Observable } from 'rxjs/Observable'
import {environment} from '../../environments/environment'


// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class AuthService {
    constructor(private http:HttpClient){

    }
    isLoggedIn(){
        if(localStorage.getItem('token')){
            return true
        }
        return false
        
    }
    get(URL){
        const header = new HttpHeaders()
        header.append('Content-Type', 'application/json');
        return this.http.get(URL,{headers:header})
    }
    post(URL,data){
        const header = new HttpHeaders()
        header.append('Content-Type', 'application/json');
        return this.http.post(URL,data,{headers:header})
    }
}
