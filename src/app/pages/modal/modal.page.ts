import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  nombre: string = 'casaXmore';
  pais: string = 'España';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async abrirModal() {

    const modal = await this.modalCtrl.create( {
      component: ModalInfoPage,
      componentProps: {
        nombre: 'casaXmore',
        pais: 'España'
      }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log('Info del modal: ', data.nombre);
    this.nombre = data.nombre;
    this.pais = data.pais;
  }

}
