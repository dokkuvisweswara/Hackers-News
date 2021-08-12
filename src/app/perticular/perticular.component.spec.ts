import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerticularComponent } from './perticular.component';

describe('PerticularComponent', () => {
  let component: PerticularComponent;
  let fixture: ComponentFixture<PerticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerticularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
