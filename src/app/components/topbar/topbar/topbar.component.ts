import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Output() toggleButton = new EventEmitter<boolean>(false);
  @Output() filter = new EventEmitter<boolean>(false);
  toggleValue = false;


  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.toggleValue = !this.toggleValue;
    this.toggleButton.emit(this.toggleValue);
  }

  openFilter() {
    this.filter.emit(true);
  }

  
}
