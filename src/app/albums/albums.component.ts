import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { SongsComponent } from '../songs/songs.component';
import { Response} from '@angular/http';
import { Router } from '@angular/router';
import { SongsService } from '../songs.service';
import 'rxjs/Rx';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: []
})
export class AlbumsComponent {

 @ViewChild('albumInput') albumInput: ElementRef;
 @ViewChild('deleteIcon') deleteIcon: ElementRef;
   
 	private albums:{name: string, songs:Array<string>}[] = [];
 	private subscription: Subscription;

	constructor(private songsService: SongsService,
				private router: Router){};

 ngOnInit() {
 		this.albums = this.songsService.albums;
 		this.subscription = this.songsService.albumsChanged
 		.subscribe(
 			(albums:{name: string, songs:Array<string>}[]) => {
 				this.albums = albums;
 			});
 		console.log(this.albums);
 }
	
	albumslog(){
		console.log(this.albums)
	}

	// albumSongs(){
	// 	this.router.navigate([])
	// }

  deleteAlbum(indexOfAlbum){
  	console.log(indexOfAlbum);
  	this.songsService.deleteAlbum(indexOfAlbum);
  	this.subscription = this.songsService.albumsChanged
 		.subscribe(
 			(albums:{name: string, songs:Array<string>}[]) => {
 				this.albums = albums;
 			});
  	// this.deleteIcon.nativeElement.parentElement.fadeOut(this);
  	// this.deleteIcon.nativeElement.remove();
  	};

  addAlbum(albumName){
  	this.songsService.newAlbum(albumName);
  	console.log(this.songsService.albums);
  }
	
	testAPI(albumName:number){
		this.songsService.getAlbum(albumName);
	}

}
