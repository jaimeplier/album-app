import { Component, DoCheck, OnInit, OnDestroy, OnChanges} from '@angular/core';
import { SongsService } from '../songs.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/Rx';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
  providers: []
})

export class SongsComponent implements OnInit {
   private subscription: Subscription;
   albums:{name:string, songs:Array<string>}[];
   // albums:any;
   album:{name:string,songs:Array<string>};
   songs:Array<string>;
   albumIndex:string;

  constructor(private songsService: SongsService,
			  private router: Router,
			  private route: ActivatedRoute){};

  ngOnInit() {
    var albumName = this.route.snapshot.params['album'];
    // this.albums = this.songsService.albums;
    //  this.subscription = this.songsService.albumsChanged
    //  .subscribe(
    //    (albums:{name: string, songs:Array<string>}[]) => {
    //      this.albums = albums;
    //      console.log(albumName);
         this.album = this.songsService.getAlbum(albumName);
         console.log(this.album);
         this.subscription = this.songsService.songsChanged.
         subscribe(
             (album:{name:string,songs:Array<string>}) => {
               this.album = album;
               this.songs = this.album.songs;
                 console.log(this.album);       
                 console.log(this.album.name);       
                 console.log(this.album.songs);       
             }
         );               
   };

  

  getAlbumName(albumName, array){
     array.filter(function( obj ) {
       obj.name == albumName ;
    })[0]["name"];
  }

  getAlbumSongs(albumName, array){
    return array.filter(function( obj ) {
      return obj.name == albumName ;
    })[0]["songs"];;
  }

  addSong(newSong){
    var name = this.album.name;
    this.songsService.albums.filter(function( obj ) {
       return obj.name == name ;
    })[0]["songs"].push(newSong);
  }

  deleteSong(songIndex){
    var name = this.album.name;
    this.songsService.albums.filter(function( obj ) {
       return obj.name == name ;
    })[0]["songs"].splice(songIndex,1);
  }

}
