import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: "add",
    component: AddRestoComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "update/:id",
    component: UpdateComponent
  },
  {
    path: "",
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
