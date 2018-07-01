import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-albbum-list',
  templateUrl: './albbum-list.component.html',
  styleUrls: ['./albbum-list.component.css']
})
export class AlbbumListComponent implements OnInit {

  albums = [];
  constructor(private http:HttpClient) { }
  //http://localhost:8000
  ngOnInit() {
    this.http.get<any>('http://localhost:8000/api/albums')
        .subscribe(data => this.albums = data);
  }

}
