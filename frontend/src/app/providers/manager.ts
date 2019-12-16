import { Injectable } from "@angular/core";

@Injectable()
export class DataManager{
    STORAGE:any = {}
    constructor(){
        this.loadData()

    }
    loadData(){
        this.STORAGE['token'] = JSON.parse(localStorage.getItem('token'))
        this.STORAGE['user'] = JSON.parse(localStorage.getItem('user'))
    }
    getUser(){
        console.log(this.STORAGE['user'])
        return this.STORAGE['user']
    }
    clearData(){
        this.STORAGE = {}
        localStorage.clear()
    }

    setUser(token:any, user:any){
        localStorage.setItem('token',JSON.stringify(token))
        localStorage.setItem('user',JSON.stringify(user))
        this.STORAGE['token'] = token
        this.STORAGE['user'] = user 
    }
    getToken(){
        return this.STORAGE['token']
    }
}