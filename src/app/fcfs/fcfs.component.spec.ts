import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FCFSComponent } from './fcfs.component';

describe('FCFSComponent', () => {
  let component: FCFSComponent;
  let fixture: ComponentFixture<FCFSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FCFSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FCFSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
