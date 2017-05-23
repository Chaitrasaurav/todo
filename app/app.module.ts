import { NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { UserListComponent }  from './user.list';
import { UserDescriptionComponent }  from './user.description';
import { PageNotFoundComponent }  from './page.not.found';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { 
    path: 'user/:id', 
    component: UserDescriptionComponent 
  },
  {
    path: 'user',
    component: UserListComponent
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports:      [ 
    BrowserModule, RouterModule.forRoot(appRoutes) 
  ],
  declarations: [ 
    AppComponent,
    UserListComponent,
    UserDescriptionComponent,
    PageNotFoundComponent
  ],
  bootstrap:    [ 
    AppComponent
  ]
})

export class AppModule { }