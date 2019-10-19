import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindnearbylocationComponent } from './findnearbylocation.component';

describe('FindnearbylocationComponent', () => {
  let component: FindnearbylocationComponent;
  let fixture: ComponentFixture<FindnearbylocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindnearbylocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindnearbylocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
