import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmcButtonComponent } from './dmc-button.component';

describe('DmcButtonComponent', () => {
  let component: DmcButtonComponent;
  let fixture: ComponentFixture<DmcButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmcButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmcButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
