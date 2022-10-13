import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesDatasComponent } from './features-datas.component';

describe('FeaturesDatasComponent', () => {
  let component: FeaturesDatasComponent;
  let fixture: ComponentFixture<FeaturesDatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesDatasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
