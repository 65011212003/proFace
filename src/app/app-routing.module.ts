import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileconfigComponent } from './pages/profileconfig/profileconfig.component';
import { VotesComponent } from './pages/votes/votes.component';
import { UpdateComponent } from './pages/update/update.component';
import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'profig', component: ProfileconfigComponent },
  { path: 'votes', component: VotesComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
