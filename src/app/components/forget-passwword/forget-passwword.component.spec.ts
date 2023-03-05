import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswwordComponent } from './forget-passwword.component';

describe('ForgetPasswwordComponent', () => {
  let component: ForgetPasswwordComponent;
  let fixture: ComponentFixture<ForgetPasswwordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPasswwordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPasswwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
