import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import {Footer} from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Footer
  ],
  template: `
    <div class="min-h-screen">
      <app-header />
      <router-outlet />
      <app-footer />
    </div>
  `
})
export class App {

}
