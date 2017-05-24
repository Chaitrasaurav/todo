import { NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';


import { AppComponent }  from './app.component';
import { UserListComponent }  from './user.list';
import { UserDescriptionComponent }  from './user.description';

const appRoutes: Routes = [
  { 
    path: 'user/:id', 
    component: UserDescriptionComponent 
  },
  {
    path: 'user',
    component: UserListComponent
  }
];

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpModule, 
    RouterModule.forRoot(appRoutes) 
  ],
  declarations: [ 
    AppComponent,
    UserListComponent,
    UserDescriptionComponent
  ],
  bootstrap:    [ 
    AppComponent
  ]
})

export class AppModule { }