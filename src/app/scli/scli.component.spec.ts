import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScliComponent } from './scli.component';

describe('ScliComponent', () => {
  let component: ScliComponent;
  let fixture: ComponentFixture<ScliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScliComponent]
    });
    fixture = TestBed.createComponent(ScliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
