import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Freddy', 'Jason', 'Chucky', 'Pennywise']

  constructor() { }

  ngOnInit() {
  }

  reorder(event) {
    console.log(event);

    const itemMover = this.personajes.splice( event.detail.from, 1)[0];
    this.personajes.splice( event.detail.to, 0, itemMover );

    event.detail.complete();
  }

  guardar() {
    console.log(this.personajes);
  }

}
