import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.page.html',
  styleUrls: ['./chronometer.page.scss'],
})
export class ChronometerPage implements OnInit {

  public centesimas: number = 0;
  public minutos: number = 59;
  public segundos: number = 0;
  public contador: any;

  public _centesimas: string = '00';
  public _minutos: string = '00';
  public _segundos: string = '00';

  isRun = false;
  estado: string = 'Start';
  arranque: boolean = false;

  constructor(public navCtrl: NavController,
              private plt: Platform,
              alertCtrl: AlertController
    ) { }

  ngOnInit() {
  }

  estadoSwap() {
    this.isRun = !this.isRun;
    if (this.isRun) {
      this.estado = 'Pause';
      this.start();
    } else {
      this.estado = 'Start';
      this.pause();
    }

  }

  start() {

    this.contador = setInterval(() => {
      this.centesimas += 1;
      if (this.centesimas < 10) { this._centesimas = '0' + this.centesimas; }
      else { this._centesimas = '' + this.centesimas; }
      if (this.centesimas == 10) {
        this.centesimas = 0;
        this.segundos += 1;
        if (this.segundos < 10) this._segundos = '0' + this.segundos;
        else this._segundos = this.segundos + '';
        if (this.segundos == 60) {
          this.segundos = 0;
          this.minutos += 1;
          if (this.minutos < 10) this._minutos = '0' + this.minutos;
          else this._minutos = this.minutos + '';
          this._segundos = '00';
          if (this.minutos == 90) {
            this.pause();
          }
        }
      }
    }, 100)
  }

  pause() {
    clearInterval(this.contador);
    this.arranque = true;
  }

  stop() {

    if (!this.isRun) {
      clearInterval(this.contador);
      this.minutos = 0;
      this.segundos = 0;
      this.centesimas = 0;

      this._centesimas = '00';
      this._segundos = '00';
      this._minutos = '00';

      this.estado = 'Start';
      this.isRun = false;
      this.contador = null;
      this.arranque = false;
    }

  }

}
