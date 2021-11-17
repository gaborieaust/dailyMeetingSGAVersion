import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppUserComponent } from './new-app-user.component';

describe('NewAppUserComponent', () => {
  let component: NewAppUserComponent;
  let fixture: ComponentFixture<NewAppUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAppUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAppUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
