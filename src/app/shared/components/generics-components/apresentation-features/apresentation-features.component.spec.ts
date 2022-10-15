import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentationFeaturesComponent } from './apresentation-features.component';

describe('ApresentationFeaturesComponent', () => {
  let component: ApresentationFeaturesComponent;
  let fixture: ComponentFixture<ApresentationFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApresentationFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApresentationFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
