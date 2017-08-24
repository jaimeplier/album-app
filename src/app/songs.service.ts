import {Injectable, Inject, OnInit} from '@angular/core';
import {HttpModule, Headers, Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class SongsService {
	albumsChanged = new Subject();
	songsChanged = new Subject();

	//Define future album name and songs list
	newAlbumName:any;
	newSongs:any;
	newAlbumID:any;

	// New album object    
	albumData:{name: string, songs:Array<string>};

	// Album in songs component
	localAlbum:{name:string, songs:Array<string>};

	// Arr with all albums
	testalbums = [];

	data:any;
	allTracks = [];

	albums = [];

constructor( private http:Http){
	this.newAlbum("sams town");
	this.newAlbum("asi en el cielo");
	this.newAlbum("enema of the");
}

getAlbums(){
	return this.albums.slice();
}

getAlbum(albumName){
    var albumSelected = this.albums.filter(function( obj ) {
      return obj.name == albumName ;
    });
    // console.log(albumName);
    // console.log(albumSelected);
    // console.log(albumSelected[0]["name"]);
    // console.log(albumSelected[0]["songs"]);
    this.localAlbum = albumSelected[0];
    
    console.log(this.localAlbum);
    this.songsChanged.next(this.localAlbum);
    return albumSelected[0];
    
  }

deleteAlbum(indexOfAlbum){
  	console.log(indexOfAlbum);
  	this.albums.splice(indexOfAlbum,1);
  	this.albumsChanged.next(this.albums.slice());
  }
    
// albumSongs(albumID).sub( song => {console.log(song)}) returns arr of songs
albumSongs(albumID){
	return this.http.
	get('http://api.musicgraph.com/api/v2/album/'+ albumID +'/tracks?api_key=7fcb5ecd307982d5604de4e73ccdec95&limit=30')
	.map(
		(res:Response) => {	
			const songData = res.json();		
			
			// func to get all tracks
			var tracks = songData.data.map(a => a.title);
			// Function to filter repeated songs
			var uTracks = tracks.filter(function(elem, index, self) {
			  return index == self.indexOf(elem);
			});
			return this.allTracks= uTracks;
		}
	);
}

// .subscribe(album => {console.log(album)}) returns []
newAlbum(name:string){
	name = name.replace(/ /g, '+');
	var albumID= '';
	this.http.
	get('http://api.musicgraph.com/api/v2/album/suggest?api_key=7fcb5ecd307982d5604de4e73ccdec95&limit=2&prefix='
	+ name)
	.subscribe(
		( res:Response) => {	
			var rawData = res.json();		
			// console.log(rawData);
			var albumName:string = rawData.data[0].title;
			albumID = rawData.data[0].id;
			this.albumSongs(albumID).subscribe(
				songs => {
				this.newSongs = songs;
				console.log("And this are the songs in newAlbum = " + this.newSongs );
				this.albumData = {
					name:albumName,
					songs:this.newSongs
				};
				this.albums.push(this.albumData)
				this.albumsChanged.next(this.albums.slice())
				}
			);
		}
	);
	this.albumsChanged.next(this.albums.slice());
}

newSong(song: string, albumName:string){
	console.log(this.albums[albumName]	)
	// function findAlbum(albumName){
	// 	return 
	// }
	// this.albums.find()

	// var albumSelected = this.albums.filter(function( obj ) {
 //      return obj.name == albumName ;
 //    });
}

}