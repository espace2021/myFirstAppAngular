import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleObservableComponent } from './exemple-observable.component';

describe('ExempleObservableComponent', () => {
  let component: ExempleObservableComponent;
  let fixture: ComponentFixture<ExempleObservableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExempleObservableComponent]
    });
    fixture = TestBed.createComponent(ExempleObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
