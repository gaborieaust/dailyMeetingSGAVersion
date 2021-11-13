import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserDuringMeetingComponent } from './add-user-during-meeting.component';

describe('AddUserDuringMeetingComponent', () => {
  let component: AddUserDuringMeetingComponent;
  let fixture: ComponentFixture<AddUserDuringMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserDuringMeetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserDuringMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
