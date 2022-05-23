import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XdNotificationsComponent } from './xd-notifications.component';

describe('XdNotificationsComponent', () => {
  let component: XdNotificationsComponent;
  let fixture: ComponentFixture<XdNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XdNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XdNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
