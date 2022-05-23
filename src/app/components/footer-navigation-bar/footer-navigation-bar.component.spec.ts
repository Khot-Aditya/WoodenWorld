import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNavigationBarComponent } from './footer-navigation-bar.component';

describe('FooterNavigationBarComponent', () => {
  let component: FooterNavigationBarComponent;
  let fixture: ComponentFixture<FooterNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterNavigationBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
