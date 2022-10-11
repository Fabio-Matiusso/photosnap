import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautifulStoriesComponent } from './beautiful-stories.component';

describe('BeautifulStoriesComponent', () => {
  let component: BeautifulStoriesComponent;
  let fixture: ComponentFixture<BeautifulStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautifulStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautifulStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
