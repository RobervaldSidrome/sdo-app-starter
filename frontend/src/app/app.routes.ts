import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CargoController } from './cargo/cargo-controller';
import { SalarioController } from './salario/salario-controller';
import { SetorController } from './setor/setor-controller';
import { UserComponent } from './user/user.component';
import { FuncionarioController } from './funcionario/funcionario-controller';
import { LoginComponent } from './security/login/login.component';
import { AddUserComponent } from './user/add-user.component';
import { AuthGuard } from './providers/auth-guard';

export const ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '',redirectTo:'home',pathMatch:'full'},  
    {path: 'home', component:HomeComponent},  
    {path: 'cargo', component: CargoController,canActivate:[AuthGuard]},
    {path: 'setor', component: SetorController,canActivate:[AuthGuard]},
    {path: 'list', component: UserComponent,canActivate:[AuthGuard]},
    {path: 'usuario', component: AddUserComponent},
    {path: 'avanco', component: SalarioController,canActivate:[AuthGuard]},
    {path: 'funcionario', component: FuncionarioController,canActivate:[AuthGuard]}

]