import { Component } from '@angular/core';
 
@Component({
  selector: 'my-app',
  template: `
              <h1>Angular Router</h1>
              <nav>
                <ul>
                  <li>
                    <a routerLink="/user" routerLinkActive="active">User</a>
                  </li>
                </ul>                
              </nav>
              <router-outlet></router-outlet>
            `
})
export class AppComponent { }