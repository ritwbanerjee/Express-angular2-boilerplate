import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import Data from './Data/list';

@Component({
  selector: 'core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {

  listA   :  any;
  listB   :  any;

  // Models
  modelA  :  any;
  modelB  :  any;

  sum     :  any;

  constructor(
  ) {}

  ngOnInit() {
    this.listA = Data.sendList('A');
    this.listB = Data.sendList('B');
    this.modelA = this.listA[0];
    this.modelB = this.listB[0];
  }

  add() {
    this.sum = 0;
    this.sum = parseInt(this.modelA.age) + parseInt(this.modelB.age);
  }
}
