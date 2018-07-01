import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-albbum-create',
  templateUrl: './albbum-create.component.html',
  styleUrls: ['./albbum-create.component.css']
})
export class AlbbumCreateComponent implements OnInit {
  
  name = '';
  
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {

  }

  create() {
    this.http.post<any>('http://localhost:8000/api/albums', {name: this.name})
        .subscribe(data => this.router.navigate(['albums']))
  }

}
