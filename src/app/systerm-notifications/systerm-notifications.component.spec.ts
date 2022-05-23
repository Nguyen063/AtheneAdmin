import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystermNotificationsComponent } from './systerm-notifications.component';

describe('SystermNotificationsComponent', () => {
  let component: SystermNotificationsComponent;
  let fixture: ComponentFixture<SystermNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystermNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystermNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
