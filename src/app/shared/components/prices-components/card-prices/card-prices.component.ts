import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-prices',
  templateUrl: './card-prices.component.html',
  styleUrls: ['./card-prices.component.scss'],
})
export class CardPricesComponent implements OnInit {
  public checked: boolean = true;
  public disabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public changeContent() {
    this.checked = !this.checked;

    if (this.checked) {
      console.log('conteudo mudou pq é true');
    } else {
      console.log('Conteudo mudou pq é falso');
    }
  }
}
