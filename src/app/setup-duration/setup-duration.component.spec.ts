import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupDurationComponent } from './setup-duration.component';

describe('SetupDurationComponent', () => {
  let component: SetupDurationComponent;
  let fixture: ComponentFixture<SetupDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupDurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
