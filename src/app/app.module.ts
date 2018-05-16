import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// --- MATERIAL

import { MaterialModule } from './material/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// --- SERVICES

import { AuthService } from './services/auth.service';
import { MoviesService } from './services/movies.service';
import { TorrentService } from './services/torrent.service';
import { ShowService } from './services/show.service';
import { ProfileService } from './services/profile.service';

// --- GUARDS
import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';

// --- PAGES

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SelectorComponent } from './pages/selector/selector.component';
import { MovieSearchPageComponent } from './pages/movie-search-page/movie-search-page.component';
import { MovieResultPageComponent } from './pages/movie-result-page/movie-result-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ShowSearchPageComponent } from './pages/show-search-page/show-search-page.component';
import { ShowResultPageComponent } from './pages/show-result-page/show-result-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';


// --- COMPONENTS

import { AppComponent } from './app.component';

// --- MOVIE COMPONENTS

import { MovieSearchComponent } from './components/movie-components/movie-search/movie-search.component';
import { MovieResultComponent } from './components/movie-components/movie-result/movie-result.component';
import { MovieTorrentComponent } from './components/movie-components/movie-torrent/movie-torrent.component';
import { MovieOverviewComponent } from './components/movie-components/movie-overview/movie-overview.component';
import { MovieInfoComponent } from './components/movie-components/movie-info/movie-info.component';
import { MovieSendCommentsComponent } from './components/movie-components/movie-send-comments/movie-send-comments.component';
import { MovieDisplayCommentsComponent } from './components/movie-components/movie-display-comments/movie-display-comments.component';

// --- SHOWS COMPONENTS
import { ShowSearchComponent } from './components/show-components/show-search/show-search.component';
import { ShowResultComponent } from './components/show-components/show-result/show-result.component';
import { ShowDisplayCommentsComponent } from './components/show-components/show-display-comments/show-display-comments.component';
import { ShowInfoComponent } from './components/show-components/show-info/show-info.component';
import { ShowOverviewComponent } from './components/show-components/show-overview/show-overview.component';
import { ShowSendCommentsComponent } from './components/show-components/show-send-comments/show-send-comments.component';

// --- ROUTES

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [RequireAnonGuardService] },
  { path: 'signup', component: SignupPageComponent, canActivate: [RequireAnonGuardService]},
  { path: 'login', component: LoginPageComponent, canActivate: [RequireAnonGuardService]},
  { path: 'selector', component: SelectorComponent, canActivate: [RequireUserGuardService]},
  { path: 'movies', component: MovieSearchPageComponent, canActivate: [RequireUserGuardService]},
  { path: 'movies/result', component: MovieResultPageComponent, canActivate: [RequireUserGuardService]},
  { path: 'shows', component: ShowSearchPageComponent, canActivate: [RequireUserGuardService]},
  { path: 'shows/result', component: ShowResultPageComponent, canActivate: [RequireUserGuardService]},
  { path: 'profile/:username', component: ProfilePageComponent, canActivate: [RequireUserGuardService]},
  { path: '**', component: NotFoundPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignupPageComponent,
    LoginPageComponent,
    SelectorComponent,
    MovieSearchPageComponent,
    MovieSearchComponent,
    MovieResultPageComponent,
    NotFoundPageComponent,
    MovieResultComponent,
    MovieTorrentComponent,
    MovieOverviewComponent,
    MovieInfoComponent,
    MovieSendCommentsComponent,
    MovieDisplayCommentsComponent,
    ShowResultPageComponent,
    ShowSearchPageComponent,
    ShowSearchComponent,
    ShowResultComponent,
    ShowDisplayCommentsComponent,
    ShowInfoComponent,
    ShowOverviewComponent,
    ShowSendCommentsComponent,
    ProfilePageComponent

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
    MoviesService,
    TorrentService,
    ShowService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
