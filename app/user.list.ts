import { Component } from '@angular/core';
 
@Component({
  selector: 'user-list',
  template: `
              <ul>
                <li><a routerLink="/user/first" routerLinkActive="active">Heroes</a></li>
              </ul>             
            `
})
export class UserListComponent { }