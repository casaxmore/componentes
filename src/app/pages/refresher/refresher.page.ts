import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items: any[] = [];
  /* items: any[] = []; */

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event) {

    setTimeout(() => {

      const masArr = Array(40);

      /* this.items = Array(40); */
      this.items.push(...masArr);
      event.target.complete();

    }, 1500);

  }

}
