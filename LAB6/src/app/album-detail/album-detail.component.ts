import { Component, OnInit } from '@angular/core';
import { Album } from '../models';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {AlbumService} from "../album.service";




@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: Album;
  loaded: boolean;


  constructor( private route: ActivatedRoute,
    private albumService: AlbumService){
    this.album = {} as Album; 
    this.loaded = true;
  }

  renameAlbum(){
    const form = document.querySelector('input');
    if(form && form.value != ''){
    this.album.title = form.value;
    form.value = "";
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) =>{
    let _id = params.get('id');
    if(_id){
      let id = +_id;
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album)=>{
        this.album = album;
        this.loaded = true;
      })
    }
    }
  )
  }
}
