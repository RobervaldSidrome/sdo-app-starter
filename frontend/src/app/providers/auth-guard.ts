import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "./auth";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public auth:AuthService, private routes:Router) {

                 }
                canActivate(){
                    this.routes.navigate(['login'])
                    alert('Por favor, faça o login antes de usar a aplicação')
                    return false;
                }
            }