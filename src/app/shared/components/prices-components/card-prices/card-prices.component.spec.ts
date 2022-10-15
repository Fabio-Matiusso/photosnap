import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPricesComponent } from './card-prices.component';

describe('CardPricesComponent', () => {
  let component: CardPricesComponent;
  let fixture: ComponentFixture<CardPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPricesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
