import { Component } from '@angular/core';

import {
  Router, NavigationStart, NavigationEnd,
  NavigationCancel, NavigationError, Event
} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularsecond';
  public loading = false;
}
