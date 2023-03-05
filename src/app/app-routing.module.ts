import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswwordComponent } from './components/forget-passwword/forget-passwword.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'forget-password',component:ForgetPasswwordComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {
    path: "admin",
    canActivate:[AuthGuard]
    ,
     loadChildren: () => import('./modules/admin/admin.module').then(x=>x.AdminModule)},
  {path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
