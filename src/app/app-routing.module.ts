import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileconfigComponent } from './pages/profileconfig/profileconfig.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'profig', component: ProfileconfigComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
