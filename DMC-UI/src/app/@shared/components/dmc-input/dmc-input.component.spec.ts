import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmcInputComponent } from './dmc-input.component';

describe('DmcInputComponent', () => {
  let component: DmcInputComponent;
  let fixture: ComponentFixture<DmcInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DmcInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmcInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
