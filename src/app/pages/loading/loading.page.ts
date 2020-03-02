import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;

  constructor(private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) { }

  ngOnInit() {

    this.presentLoading( 'Cargando');

    setTimeout(() => {
      this.loading.dismiss();
      this.presentAlertConfirm();
      console.log('Loading finalizado');
    }, 3500);

  }

  async presentLoading( message: string ) {
    this.loading = await this.loadingCtrl.create({
      spinner: 'dots',
      message
      /* duration: 2000 */
    });
    return this.loading.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Bienvenido!!',
      message: 'El tiempo de carga terminó',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'success',
          handler: () => {
            console.log('Confirma cancelar');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirma Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}
