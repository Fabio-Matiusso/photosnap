import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-prices',
  templateUrl: './card-prices.component.html',
  styleUrls: ['./card-prices.component.scss'],
})
export class CardPricesComponent implements OnInit {
  checked = false;
  disabled = false;

  constructor() {}

  ngOnInit(): void {}
}
