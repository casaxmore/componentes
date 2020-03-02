import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', {static: false}) lista: IonList;

  usuarios: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  favorite(usuario) {
    console.log('favorite', usuario);
    this.lista.closeSlidingItems();
  }
  share(usuario) {
    console.log('share', usuario);
    this.lista.closeSlidingItems();
  }
  delete(usuario) {
    console.log('delete', usuario);
    this.lista.closeSlidingItems();
  }

}
