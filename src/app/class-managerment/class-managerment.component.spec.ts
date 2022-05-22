import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassManagermentComponent } from './class-managerment.component';

describe('ClassManagermentComponent', () => {
  let component: ClassManagermentComponent;
  let fixture: ComponentFixture<ClassManagermentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassManagermentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassManagermentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
