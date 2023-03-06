import { Component, OnInit} from '@angular/core';
import { Album, Photo } from '../models';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  newAlbum: Album;
  loaded: boolean;

  constructor(private albumService: AlbumService) {
    this.albums = [];
    this.newAlbum = {} as Album
    this.loaded = true;
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(){
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }
  addAlbum(){
    this.loaded = false;
    this.albumService.addAlbum(this.newAlbum).subscribe((album) => {
      // this.posts.push(post);
      this.albums.unshift(album);
      this.loaded = true;
      this.newAlbum = {} as Album;
    });
  }

  deleteAlbum(album : Album){
    this.albums = this.albums.filter((x)=> x.id !== album.id);
  }
}
