import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDrawerComponent } from './login.component';

describe('LoginDrawerComponent', () => {
  let component: LoginDrawerComponent;
  let fixture: ComponentFixture<LoginDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
