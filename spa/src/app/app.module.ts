import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlbbumListComponent } from './albbum-list/albbum-list.component';
import { AlbbumCreateComponent } from './albbum-create/albbum-create.component';
import { PhotoCreateComponent } from './photo-create/photo-create.component';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'

const routes = [
  {path: 'albums', component: AlbbumListComponent},
  {path: 'albums/create', component: AlbbumCreateComponent},
  {path: 'albums/:album/photos/create', component: PhotoCreateComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AlbbumListComponent,
    AlbbumCreateComponent,
    PhotoCreateComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
