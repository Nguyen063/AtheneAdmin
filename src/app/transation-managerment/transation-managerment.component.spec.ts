import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransationManagermentComponent } from './transation-managerment.component';

describe('TransationManagermentComponent', () => {
  let component: TransationManagermentComponent;
  let fixture: ComponentFixture<TransationManagermentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransationManagermentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransationManagermentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
