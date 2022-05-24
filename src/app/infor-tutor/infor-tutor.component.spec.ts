import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforTutorComponent } from './infor-tutor.component';

describe('InforTutorComponent', () => {
  let component: InforTutorComponent;
  let fixture: ComponentFixture<InforTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforTutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InforTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
