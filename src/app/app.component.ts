import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSidebarOpened: boolean = false;
  toggleSidebar(data: boolean) {
    this.isSidebarOpened = data
  }

  title = 'commerce';
}
