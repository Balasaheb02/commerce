import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() name: string;
  @Input() address1: string;
  @Input() email: string;
  @Input() number: string;
  @Input() id: string;
  @Input() showButton = false;
  @Output() detailsId = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  getDetails(id){
    this.detailsId.emit(id);
  }

}
