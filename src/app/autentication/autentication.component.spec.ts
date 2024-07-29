import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticationComponent } from './autentication.component';

describe('AutenticationComponent', () => {
  let component: AutenticationComponent;
  let fixture: ComponentFixture<AutenticationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutenticationComponent]
    });
    fixture = TestBed.createComponent(AutenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
