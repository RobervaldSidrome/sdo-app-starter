import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { RatingComponent } from './shared/rating/rating.component';
import { CargoController } from './cargo/cargo-controller';

import { SalarioController } from './salario/salario-controller';
import { SetorController } from './setor/setor-controller';
import { FuncionarioController } from './funcionario/funcionario-controller';
import { LoginComponent } from './security/login/login.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component';
import {Services} from './providers/services'
import { AuthGuard } from './providers/auth-guard';
import { AuthService } from './providers/auth';
import {DataManager} from './providers/manager'
import { PasswordMatch } from './shared/password-match';
import { ListSetorController } from './setor/list-setor-controller';
import { EditSetorController } from './setor/edit-setor-controller';
import { ListCargoController } from './cargo/list-cargo-controller';
import { EditCargoController } from './cargo/edit-cargo-controller';
import { ListNivelController } from './nivel/list-nivel-controller';
import { EditNivelController } from './nivel/edit-nivel-controller';
import { NivelController } from './nivel/nivel-controller';
import { EditSalarioController } from './salario/edit-salario-controller';
import { ListSalarioController } from './salario/list-salario-controller';

//import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SalarioController,
    EditSalarioController,
    ListSalarioController,
    HomeComponent,
    InputComponent,
    RadioComponent,
    RatingComponent,
    CargoController,
    ListCargoController,
    EditCargoController,
    SetorController,
    ListNivelController,
    NivelController,
    EditNivelController,
    ListSetorController,
    EditSetorController,

    UserComponent,
    AddUserComponent,
    UserDetailComponent,
    PasswordMatch,
   // UserService,
    FuncionarioController,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //NgxMaskModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    Services,
    AuthService,
    AuthGuard,
    DataManager],

  bootstrap: [AppComponent]
})
export class AppModule {}
