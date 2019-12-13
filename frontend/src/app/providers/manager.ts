import { Injectable } from "@angular/core";

@Injectable()
export class DataManager{
    STORAGE: any = {}
    constructor(){

    }

    setUser(token:any, user:any){
        this.STORAGE['token'] = token
        this.STORAGE['user'] = user 
    }
    getToken(){
        return this.STORAGE['token']
    }
}