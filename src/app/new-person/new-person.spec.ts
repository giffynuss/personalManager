import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPerson } from './new-person';

describe('NewPerson', () => {
  let component: NewPerson;
  let fixture: ComponentFixture<NewPerson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPerson]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPerson);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
