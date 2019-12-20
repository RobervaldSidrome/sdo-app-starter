import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public auth:AuthService, private routes:Router) {
    }

    canActivate(){
        if(this.auth.isLoggedIn()){
            return true
        }
        alert("Por favor, faça o login na aplicação")
        this.routes.navigateByUrl('/login')
        return false
    }
}