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
import { ListCargoController } from './cargo/list-cargo-controller';
import { EditCargoController } from './cargo/edit-cargo-controller';
import { ListNivelController } from './nivel/list-nivel-controller';
import { EditNivelController } from './nivel/edit-nivel-controller';
import { EditSalarioController } from './salario/edit-salario-controller';
import { ListSalarioController } from './salario/list-salario-controller';

export const ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '',redirectTo:'home',pathMatch:'full'},  
    {path: 'home', component:HomeComponent, canActivate:[AuthGuard]},  
    {path: 'cargo', component: ListCargoController,canActivate:[AuthGuard]},
    {path: 'cargo/:id', component: EditCargoController,canActivate:[AuthGuard]},
    {path: 'nivel', component: ListNivelController,canActivate:[AuthGuard]},
    {path: 'nivel/:id', component: EditNivelController,canActivate:[AuthGuard]},
    {path: 'setor', component: ListSetorController,canActivate:[AuthGuard]},
    {path: 'setor/:id', component:EditSetorController, canActivate:[AuthGuard]},
    {path: 'list', component: UserComponent,canActivate:[AuthGuard]},
    {path: 'usuario', component: AddUserComponent},
    {path: 'avanco', component: ListSalarioController,canActivate:[AuthGuard]},
    {path: 'avanco/:id', component: EditSalarioController,canActivate:[AuthGuard]},
    {path: 'funcionario', component: FuncionarioController,canActivate:[AuthGuard]}

]