import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforLearnerComponent } from './infor-learner.component';

describe('InforLearnerComponent', () => {
  let component: InforLearnerComponent;
  let fixture: ComponentFixture<InforLearnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforLearnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InforLearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
