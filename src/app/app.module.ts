import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { ContributionService } from './contribution.service'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './pages/new/new.component';
import { ContributionComponent } from './pages/contribution/contribution.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AskComponent } from './pages/ask/ask.component';



import { NavbarComponent } from './elements/navbar/navbar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'new', component: NewComponent },
  { path: 'contribution/:id', component: ContributionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/:id', component: ProfileComponent },
  { path: 'ask', component: AskComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,
    NavbarComponent,
    ContributionComponent,
    LoginComponent,
    ProfileComponent,
    AskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContributionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
