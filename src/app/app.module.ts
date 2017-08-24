import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { FormsModule } from '@angular/forms';
import { AlbumsComponent } from './albums/albums.component';
import { SongsService } from './songs.service';
import { HttpModule, Headers, Http, Response } from '@angular/http';


          const appRoutes: Routes =[
          	{path: '', component: AlbumsComponent},
          	{path: ':album', component: SongsComponent},
          ];

          @NgModule({
            declarations: [
              SongsComponent,
              AppComponent,
              AlbumsComponent    
            ],
            imports: [
              BrowserModule,
              FormsModule,
              RouterModule.forRoot(appRoutes),
              HttpModule
            ],
            providers: [SongsService],
            bootstrap: [AppComponent]
          })
          export class AppModule {}
