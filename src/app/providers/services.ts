import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SDO_API} from '../app.api';
import { User } from '../user/user.model';
import { Observable } from 'rxjs/Observable'


// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class Services {

    
  constructor(private http:HttpClient ) {
      
  }

  userUrl = 'http://localhost:8080/user-portal/users';

  //private userUrl = '/api';

  getUsers() {   
    return this.http.get<User[]>(this.userUrl);
  }

  deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  updateUser(user){
    return this.http.put(this.userUrl +"/"+ user.id, user);
  }

  createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }
  login(email: string, password: string): Observable<User>{
    return this.http.post<User>(`${SDO_API}/login`,
     {email: email, password: password})
}

}