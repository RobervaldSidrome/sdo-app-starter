import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CargoController } from './cargo/cargo-controller';
import { SalarioController } from './salario/salario-controller';
import { UserComponent } from './user/user.component';
import { FuncionarioController } from './funcionario/funcionario-controller';
import { LoginComponent } from './security/login/login.component';
import { AddUserComponent } from './user/add-user.component';
import { AuthGuard } from './providers/auth-guard';
import { ListSetorController } from './setor/list-setor-controller';
import { EditSetorController } from './setor/edit-setor-controller';

export const ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '',redirectTo:'home',pathMatch:'full'},  
    {path: 'home', component:HomeComponent, canActivate:[AuthGuard]},  
    {path: 'cargo', component: CargoController,canActivate:[AuthGuard]},
    {path: 'setor', component: ListSetorController,canActivate:[AuthGuard],pathMatch:'full',children:[]},
    {path: 'setor/:id', component:EditSetorController, canActivate:[AuthGuard]},
    {path: 'list', component: UserComponent,canActivate:[AuthGuard]},
    {path: 'usuario', component: AddUserComponent},
    {path: 'avanco', component: SalarioController,canActivate:[AuthGuard]},
    {path: 'funcionario', component: FuncionarioController,canActivate:[AuthGuard]}

]