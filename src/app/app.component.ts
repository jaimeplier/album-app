import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { SongsComponent } from './songs/songs.component';
import { Router } from '@angular/router';
import { SongsService } from './songs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
	albums:any = [];
	
	constructor(private songsService: SongsService){
	};

  
	ngOnInit() {
		// this.songsService.init()	
}
    
}
 


