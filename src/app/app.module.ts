import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileconfigComponent } from './pages/profileconfig/profileconfig.component';
import { VotesComponent } from './pages/votes/votes.component';
import { UpdateComponent } from './pages/update/update.component';
import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    ProfileconfigComponent,
    VotesComponent,
    UpdateComponent,
    ChangepasswordComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
