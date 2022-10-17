import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-prices',
  templateUrl: './card-prices.component.html',
  styleUrls: ['./card-prices.component.scss'],
})
export class CardPricesComponent implements OnInit {
  public checked: boolean = true;
  public disabled: boolean = false;

  public prices: {
    yearly: {
      basic: string;
      pro: string;
      business: string;
    };
  } = {
    yearly: {
      basic: '$ 190.00',
      pro: '$ 390.00',
      business: '$990.00',
    },
  };

  public plansAndDescription: {
    basic: {
      plan: string;
      description: string;
    };
    pro: {
      plan: string;
      description: string;
    };
    business: {
      plan: string;
      description: string;
    };
  } = {
    basic: {
      plan: 'Basic',
      description:
        'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
    },
    pro: {
      plan: 'Pro',
      description:
        'More advanced features available. Recommended for photography veterans and professionals.',
    },
    business: {
      plan: 'Business',
      description:
        'Additional features available such as more detailed metrics. Recommended for business owners.',
    },
  };

  public ctaButtonText: string = 'PICK PLAN';

  public timing: string = 'Per Year';

  constructor() {}

  ngOnInit(): void {}

  public changeContent() {
    this.checked = !this.checked;

    if (!this.checked) {
      this.timing = 'Per Month';
      this.prices.yearly.basic = '$ 19.00';
      this.prices.yearly.pro = '$ 39.00';
      this.prices.yearly.business = '$ 99.00';
    } else {
      this.timing = 'Per Year';
      this.prices.yearly.basic = '$ 190.00';
      this.prices.yearly.pro = '$ 390.00';
      this.prices.yearly.business = '$ 990.00';
    }
  }
}
