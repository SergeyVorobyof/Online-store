import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodAdditionComponent } from './good-addition.component';

describe('GoodAdditionComponent', () => {
  let component: GoodAdditionComponent;
  let fixture: ComponentFixture<GoodAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
