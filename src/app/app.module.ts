import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// --- MATERIAL

import { MaterialModule } from './material/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// --- SERVICES

import { AuthService } from './services/auth.service';
import { MoviesService } from './services/movies.service';

// --- GUARDS
import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';

// --- PAGES

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SelectorComponent } from './pages/selector/selector.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';


// --- COMPONENTS

import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';


// --- ROUTES

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [RequireAnonGuardService] },
  { path: 'signup', component: SignupPageComponent, canActivate: [RequireAnonGuardService]},
  { path: 'login', component: LoginPageComponent, canActivate: [RequireAnonGuardService]},
  { path: 'selector', component: SelectorComponent, canActivate: [RequireUserGuardService]},
  { path: 'movies', component: MoviePageComponent, canActivate: [RequireUserGuardService]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignupPageComponent,
    LoginPageComponent,
    SelectorComponent,
    MoviePageComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService,
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
