import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-photo-create',
  templateUrl: './photo-create.component.html',
  styleUrls: ['./photo-create.component.css']
})
export class PhotoCreateComponent implements OnInit {

  constructor(private http:HttpClient, private route:ActivatedRoute) { }
  name  = '';
  album = null;
  file  = null;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getAlbum(params['album'])
    });
    
  }

  handleFile(file) {
    this.file = file;
  }
  
  getAlbum(albumId) {
    this.http.get('http://localhost:8000/api/albums/'+albumId)
             .subscribe(data => this.album = data);
  }

  upload() {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('file_name', this.file);

    this.http.post<any>('http://localhost:8000/api/albums/'+ this.album.id+'/photos', formData)
    .subscribe(data => alert('upload de photos feito com sucesso!'))
    // POST /1/photos
  }



}
